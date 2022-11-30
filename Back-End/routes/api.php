<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/admin/register', [AuthController::class, 'registerAdmin']);

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::resource('/categories', CategoryProductsController::class);
    Route::resource('/products', ProductsController::class);
    Route::resource('/products/image', ImageProductsController::class);
    Route::patch('/users/edit', [UserController::class, 'updateProfile']);
    Route::resource('/reviews', ReviewsController::class);

    Route::post('/logout', [AuthController::class, 'logout']);
});

