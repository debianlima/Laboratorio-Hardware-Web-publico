<?php

namespace HospitalClinicoPuq\LoginLogs\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class LoginLogSerializer extends AbstractSerializer
{
    protected $type = 'loginLogs';

    public function getAttributes($model, ?array $fields = null)
    {
        return [
            'username' => $model->username,
            'logged_in_at' => $model->logged_in_at,
            'logged_out_at' => $model->logged_out_at,
        ];
    }

    public function getDefaultAttributes($model)
    {
        return [];
    }
}
