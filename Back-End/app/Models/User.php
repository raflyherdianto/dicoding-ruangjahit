<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'photo',
        'first_address',
        'second_address',
        'province_id',
        'regency_id',
        'zip_code',
        'first_phone',
        'second_phone',
        'roles',
        'store_name',
        'bank_name',
        'bank_account',
        'open_time',
        'close_time',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function province(){
        return $this->belongsTo(Province::class);
    }

    public function regency(){
        return $this->belongsTo(Regency::class);
    }

    public function product(){
        return $this->hasMany(Products::class);
    }

    public function review(){
        return $this->hasMany(Reviews::class);
    }

    public function transaction(){
        return $this->hasMany(Transactions::class);
    }

    public function cart(){
        return $this->hasMany(Carts::class);
    }

}
