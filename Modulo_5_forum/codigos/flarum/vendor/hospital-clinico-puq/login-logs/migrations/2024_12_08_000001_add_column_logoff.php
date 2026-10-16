<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('login_logs', function (Blueprint $table) {
            $table->timestamp('logged_out_at')->nullable()->after('logged_in_at');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('login_logs', function (Blueprint $table) {
            $table->dropColumn('logged_out_at');
        });
    },
];
