<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageProducts extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'image'
    ];

    public function product(){
        return $this->belongsTo(Products::class);
    }
}
