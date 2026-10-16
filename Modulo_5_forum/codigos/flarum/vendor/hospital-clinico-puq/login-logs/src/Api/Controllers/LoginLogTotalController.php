<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Illuminate\Database\ConnectionInterface;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class LoginLogTotalController extends AbstractListController
{
    public $serializer = \HospitalClinicoPuq\LoginLogs\Api\Serializer\LoginLogTotalSerializer::class;

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

        $total = $this->db->table('login_logs')
            ->selectRaw('COUNT(*) as total');
        if ($startDate) {
            $total = $total->where('logged_in_at', '>=', $startDate);
        }
        if ($endDate) {
            $total = $total->where('logged_in_at', '<=', $endDate);
        }
        if ($userId) {
            $total = $total->where('user_id', '=', $userId);
        }
        $total = $total->get();

        return $total->map(function ($tot, $index) {
            $tot->id = $index + 1; // Assign a unique ID
            return $tot;
        });
    }

}
