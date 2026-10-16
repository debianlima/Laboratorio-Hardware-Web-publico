<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class LoginLogStatsSerializer extends AbstractSerializer
{
    protected $type = 'loginLogsStats';
    public function getAttributes($model, ?array $fields = null)
    {
        return [
            'id' => $model->id,
            'date' => $model->date,
            'logins' => $model->logins,
        ];
    }
    public function getDefaultAttributes($model)
    {
        return [];
    }
}
