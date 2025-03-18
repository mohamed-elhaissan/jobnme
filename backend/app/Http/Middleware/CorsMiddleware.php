<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /** @var Response $response */
        $response = $next($request);

        // Add the CORS headers to the response
        $response->headers->set('Access-Control-Allow-Origin', '*'); // Change '*' to the allowed origins
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

        // If it is an OPTIONS request, return a response with status 200
        if ($request->getMethod() == "OPTIONS") {
            return response()->json([], 200);
        }

        return $response;
    }
}
