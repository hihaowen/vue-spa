<?php

namespace App\Http\Proxy;

class TokenProxy {

    protected $http;

    public function __construct(\GuzzleHttp\Client $http) {

        $this->http = $http;
    }

    public function proxy($grantType, array $data) {

        $data[ 'client_id' ] = env('PASSPORT_CLIENT_ID');
        $data[ 'client_secret' ] = env('PASSPORT_CLIENT_SECRET');
        $data[ 'grant_type' ] = $grantType;
        $data[ 'scope' ] = '';
        $response = $this->http->post('http://localhost:9090/oauth/token', [
                'form_params' => $data
            ]
        );

        $token = json_decode((string) $response->getBody(), true);

        return response()->json([
            'token' => $token['access_token'],
            'auth_id' => md5($token['refresh_token']),
            'expires_in' => $token['expires_in'],
        ])->cookie('refreshToken', $token['refresh_token'], 86400, null, null, false, true);
    }
}