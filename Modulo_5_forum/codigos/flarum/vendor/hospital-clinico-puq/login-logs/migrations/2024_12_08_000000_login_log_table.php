<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('login_logs')) { // Add this check

            $schema->create('login_logs', function (Blueprint $table) {
                $table->id();
                $table->unsignedInteger('user_id');
                $table->timestamp('logged_in_at')->useCurrent();

                $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('login_logs');
    },
];
