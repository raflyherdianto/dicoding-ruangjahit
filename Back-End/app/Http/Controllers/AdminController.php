<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;

class AdminController extends Controller
{
    use HttpResponses;

    public function login(LoginUserRequest $request) {
        $request->validated($request->all());

        if (!Auth::attempt($request->only('username', 'password'))) {
            return $this->error('','Credentials do not match', 401);
        }

        $user = User::where('username', $request->username)->first();

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
        ]);
    }

    public function register(StoreUserRequest $request) {
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'first_address' => $request->first_address,
            'province_id' => $request->province_id,
            'regency_id' => $request->regency_id,
            'zip_code' => $request->zip_code,
            'first_phone' => $request->first_phone,
            'roles' => 'admin',
        ]);

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
        ]);
    }

    public function getUserLoggedIn()
    {
        return response()->json([
            'data' => Auth::user(),
        ]);
    }

    public function logout() {
        Auth::user()->currentAccessToken()->delete();

        return $this->success([
            'message' => 'You have successfully been logged out and your token has been deleted'
        ]);
    }
}
