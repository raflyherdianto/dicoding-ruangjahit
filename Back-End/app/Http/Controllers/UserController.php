<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UsersResource;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    public function updateProfile (UpdateUserRequest $request){

        $user = User::where('id', Auth::user()->id)->first();

        $user->update($request->all());

        return response()->json([
            'message' => 'Profile updated successfully'
        ], 200);
        return new UsersResource($user);
    }

    public function index(){
        return new UsersResource(User::with(['products'])->whereNotIn('roles', ['user'])->whereNotNull(['store_name', 'bank_account', 'bank_name', 'store_status', 'open_time', 'close_time'])->latest()->get());
    }

    public function indexTailor(User $user){
        if($user->roles == 'user'){
            return response ()->json([
                'message' => 'You are not allowed to access this page'
            ], 403);
        }
        return new UsersResource(User::with(['products'])->where('id', $user->id)->latest()->get());
    }
}
