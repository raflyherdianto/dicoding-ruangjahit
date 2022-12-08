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

        return new UsersResource($user);
    }

    public function index(){
        return new UsersResource(User::with(['products'])->whereNotNull('store_name', 'bank_name', 'bank_account', 'open_time', 'close_time', 'store_status')->latest()->get());
    }

    public function indexTailor(User $user){
        return new UsersResource(User::with(['products'])->where('id', $user->id)->where('roles', 'admin')->latest()->get());
    }
}
