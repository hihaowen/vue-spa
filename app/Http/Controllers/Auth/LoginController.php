<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Proxy\TokenProxy;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $proxy;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * LoginController constructor.
     *
     * @param TokenProxy $proxy
     */
    public function __construct(TokenProxy $proxy)
    {
        $this->middleware('guest')->except('logout');
        $this->proxy = $proxy;
    }

    public function login()
    {
        $this->validateLogin(request());

        // 检查是否激活
        if( ! auth()->attempt([
            'email' => request('email'),
            'password' => request('password'),
            'is_active' => 1,
        ]) ) {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Credentials not match',
                ], 421
            );
        }

        return $this->proxy->proxy('password', [
            'username' => request('email'),
            'password' => request('password'),
        ]);
    }
}
