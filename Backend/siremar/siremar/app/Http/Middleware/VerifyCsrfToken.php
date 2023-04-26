<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'addbusiness',
        'addevents',
        'addmoveout',
        'addregister',
        'addschool',
        'checkuser',
        'contact',
        'getbusiness',
        'getcount',
        'getevents',
        'getschools',
        'getusers',
        'login',
        'register',
    ];
}
