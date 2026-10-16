<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Illuminate\Database\ConnectionInterface;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class LoginLogStatsController extends AbstractListController
{
    public $serializer = \HospitalClinicoPuq\LoginLogs\Api\Serializer\LoginLogStatsSerializer::class;

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

        $actor = $request->getAttribute('actor');
        $actor->assertAdmin();

        $stats = $this->db->table('login_logs')
            ->selectRaw('DATE(logged_in_at) as date, COUNT(*) as logins')
            ->groupBy('date')
            ->orderBy('date', 'asc');
        if ($startDate) {
            $stats = $stats->where('logged_in_at', '>=', $startDate);
        }
        if ($endDate) {
            $stats = $stats->where('logged_in_at', '<=', $endDate);
        }
        if ($userId) {
            $stats = $stats->where('user_id', '=', $userId);
        }
        $stats = $stats->get();


        // Add unique 'id' field to each row
        return $stats->map(function ($stat, $index) {
            $stat->id = $index + 1; // Assign a unique ID
            return $stat;
        });
    }

}
