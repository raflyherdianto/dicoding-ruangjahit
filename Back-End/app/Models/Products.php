<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'category_product_id',
        'price',
        'description',
        'stock',
        'rating',
        'size',
        'color',
        'weight',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function category_product(){
        return $this->belongsTo(CategoryProducts::class);
    }

    public function image_product(){
        return $this->hasMany(ImageProducts::class);
    }

    public function review(){
        return $this->hasMany(Reviews::class);
    }

    public function transaction_detail(){
        return $this->hasMany(TransactionDetails::class);
    }

    public function favorite(){
        return $this->hasMany(Favorites::class);
    }

    public function cart(){
        return $this->hasMany(Carts::class);
    }

    public function appointment(){
        return $this->hasMany(Appointments::class);
    }
}
