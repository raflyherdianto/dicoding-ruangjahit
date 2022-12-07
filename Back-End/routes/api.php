<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\IndoRegionController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\TransactionsController;
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

// Route get Tailor
Route::get('/tailors', [UserController::class, 'index']);
// Route get Details Tailor
Route::get('/tailors/{user}', [UserController::class, 'indexTailor']);

// Route get Categories
Route::get('categories', [CategoryProductsController::class, 'index']);

// Route get Products
Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{product}', [ProductsController::class, 'show']);

// Route get Reviews
Route::get('reviews', [ReviewsController::class, 'index']);

// Route get Reviews
Route::get('images', [ImageProductsController::class, 'index']);

// Route get Province
Route::get('/provinces', [IndoRegionController::class, 'indexProvince']);

// Route get Regency
Route::get('/regencies', [IndoRegionController::class, 'indexRegency']);


// Prefix admin, namespace Admin
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {

    // Route Auth Admin
    Route::post('/register', [AdminController::class, 'register']);
    Route::post('/login', [AdminController::class, 'login']);

    // Middleware Admin
    Route::middleware(['auth:sanctum', 'admin'])->group(function () {

        // Route get Admin Login Products
        Route::get('/user', [AdminController::class, 'getUserLoggedIn']);

        // Route get Admin Products
        Route::get('products', [ProductsController::class, 'indexAdmin']);

        // Route get Admin Image Products
        Route::get('images', [ImageProductsController::class, 'indexAdmin']);

        // Route get Transactions
        Route::get('transactions', [TransactionsController::class, 'indexAdmin']);

        // Route get Admin Appointments
        Route::get('appointments', [AppointmentsController::class, 'indexAdmin']);

        // Route Logout Admin
        Route::post('/logout', [AdminController::class, 'logout']);
    });
});

// Middleware Admin
Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    // Route resource Categories
    Route::resource('categories', CategoryProductsController::class)->except(['index', 'create', 'edit']);

    // Route resource Image Products
    Route::resource('images', ImageProductsController::class)->except(['index', 'create', 'edit']);

    // Route resource Products
    Route::resource('products', ProductsController::class)->except(['index','indexAdmin', 'create', 'show', 'edit']);

    // Route resource Reviews
    Route::resource('reviews', ReviewsController::class)->except(['index', 'create', 'show', 'edit', 'store', 'update']);

    // Route Resource Transaction
    Route::resource('appointments', AppointmentsController::class)->except(['create', 'edit', 'index', 'indexAdmin']);

    // Route Resource Transaction
    Route::resource('transactions', TransactionsController::class)->except(['create', 'edit', 'index', 'indexAdmin']);
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

    // Route add Carts
    Route::post('/carts/{product}', [CartsController::class, 'store']);

    // Route Checkout Carts
    Route::put('/checkout/{cart}', [CartsController::class, 'checkout']);

    // Route get User Appointment
    Route::get('appointments', [AppointmentsController::class, 'index']);

    // Route get User Favorite
    Route::get('favorites', [FavoritesController::class, 'index']);

    // Route add User Favorite
    Route::post('/favorites/{product}', [FavoritesController::class, 'store']);

    // Route delete User Favorite
    Route::delete('favorites', [FavoritesController::class, 'destroy']);

    // Route Resource Transaction
    Route::resource('transactions', TransactionsController::class)->except(['create', 'edit', 'update', 'store', 'destroy']);
});

