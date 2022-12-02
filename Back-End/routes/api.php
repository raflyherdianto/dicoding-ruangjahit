<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ImageProductsController;
use App\Http\Controllers\CategoryProductsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route Auth User
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Route get Categories
Route::get('categories', [CategoryProductsController::class, 'index']);

// Route get Products
Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{product}', [ProductsController::class, 'show']);

// Route get Reviews
Route::get('reviews', [ReviewsController::class, 'index']);


// Prefix admin, namespace Admin
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {

    // Route Auth Admin
    Route::post('/register', [AdminController::class, 'register']);
    Route::post('/login', [AdminController::class, 'login']);

    // Middleware Admin
    Route::middleware(['auth:sanctum', 'admin'])->group(function () {

      // Route get Admin Login
      Route::get('/user', [AdminController::class, 'getUserLoggedIn']);

      Route::post('/logout', [AdminController::class, 'logout']);
    });
  });

// Middleware Admin
Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    // Route resource Categories
    Route::resource('categories', CategoryProductsController::class)->except(['index', 'create', 'edit']);

    // Route resource Products
    Route::resource('products', ProductsController::class)->except(['index', 'create', 'show', 'edit']);

    // Route resource Reviews
    Route::resource('reviews', ReviewsController::class)->except(['index', 'create', 'show', 'edit', 'store', 'update']);

});

// Middleware User
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Route get User Login
    Route::get('/user', [AuthController::class, 'getUserLoggedIn']);

    // Route edit User Login
    Route::put('/users/edit', [UserController::class, 'updateProfile']);

    // Route resource Reviews
    Route::resource('reviews', ReviewsController::class)->except(['index', 'create', 'show', 'edit']);

    // Route resource Carts
    Route::resource('carts', CartsController::class)->except(['create', 'show', 'edit', 'store']);
    Route::post('/carts/{product}', [CartsController::class, 'store']);

});

