<?php

use Flarum\Extend;
use Flarum\User\Event\LoggedIn;
use Flarum\User\Event\LoggedOut;
use Illuminate\Database\ConnectionInterface;
use Carbon\Carbon;
use HospitalClinicoPuq\LoginLogs\Api\Controllers\LoginLogController;
use HospitalClinicoPuq\LoginLogs\Api\Controllers\LoginLogStatsController;
use HospitalClinicoPuq\LoginLogs\Api\Controllers\LoginLogTotalController;


return [
    (new Extend\Event())
        ->listen(LoggedIn::class, function (LoggedIn $event) {
            // Log login
            $db = resolve(ConnectionInterface::class);
            $db->table('login_logs')->insert([
                'user_id' => $event->user->id,
                'logged_in_at' => Carbon::now(),
                'logged_out_at' => null, // Default as null on login
            ]);
        })
        ->listen(LoggedOut::class, function (LoggedOut $event) {
            // Log logout
            $db = resolve(ConnectionInterface::class);
            $db->table('login_logs')
                ->where('user_id', $event->user->id)
                ->whereNull('logged_out_at') // Find the latest active login
                ->orderBy('logged_in_at', 'desc')
                ->limit(1)
                ->update(['logged_out_at' => Carbon::now()]);
        }),
    (new Extend\Routes('api'))
        ->get('/loginLogs', 'loginLogs.index', LoginLogController::class),
    (new Extend\Routes('api'))
        ->get('/loginLogStats', 'loginLogs.stats', LoginLogStatsController::class),
    (new Extend\Routes('api'))
        ->get('/loginLogsTotal', 'loginLogs.total', LoginLogTotalController::class),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
];
