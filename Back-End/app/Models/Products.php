<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category_product(){
        return $this->belongsTo(CategoryProducts::class);
    }

    public function image_products(){
        return $this->hasMany(ImageProducts::class, 'product_id');
    }

    public function reviews(){
        return $this->hasMany(Reviews::class, 'product_id');
    }

    public function transactions(){
        return $this->hasMany(Transactions::class, 'product_id');
    }

    public function favorites(){
        return $this->hasMany(Favorites::class, 'product_id');
    }

    public function carts(){
        return $this->hasMany(Carts::class, 'product_id');
    }

    public function appointments(){
        return $this->hasMany(Appointments::class);
    }
}
