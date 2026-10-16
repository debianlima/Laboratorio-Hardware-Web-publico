<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class LoginLogTotalSerializer extends AbstractSerializer
{
    protected $type = 'loginLogsTotal';
    public function getAttributes($model, ?array $fields = null)
    {
        return [
            'id' => $model->id,
            'total' => $model->total,
        ];
    }
    public function getDefaultAttributes($model)
    {
        return [];
    }
}
