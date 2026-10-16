<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Illuminate\Database\ConnectionInterface;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class LoginLogController extends AbstractListController
{
    public $serializer = \HospitalClinicoPuq\LoginLogs\Api\Serializer\LoginLogSerializer::class;

    protected $db;

    public function __construct(ConnectionInterface $db)
    {
        $this->db = $db;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $startDate = $request->getQueryParams()['startDate'] ?? null;
        $endDate = $request->getQueryParams()['endDate'] ?? null;
        $userId = $request->getQueryParams()['user'] ?? null;

        $offset = $request->getQueryParams()['offset'] ?? 0;
        $limit = $request->getQueryParams()['limit'] ?? 10;

        $offset = (int) $offset;

        $actor = $request->getAttribute('actor');
        $actor->assertAdmin();  // Ensure only admins can access the logs

        $logs = $this->db->table('login_logs')
            ->join('users', 'users.id', '=', 'login_logs.user_id')
            ->select('users.username', 'login_logs.logged_in_at', 'login_logs.logged_out_at', 'login_logs.id')
            ->orderBy('login_logs.logged_in_at', 'desc')
            ->offset($offset)
            ->limit($limit);
        if ($startDate) {
            $logs = $logs->where('logged_in_at', '>=', $startDate);
        }
        if ($endDate) {
            $logs = $logs->where('logged_in_at', '<=', $endDate);
        }
        if ($userId) {
            $logs = $logs->where('user_id', '=', $userId);
        }
        $logs = $logs->get();

        return $logs;
    }
}
