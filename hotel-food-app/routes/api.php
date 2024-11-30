<?php

use App\Http\Controllers\HotelController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('hotels')->group(function () {
    Route::get('/', [HotelController::class, 'index']);
    Route::post('/', [HotelController::class, 'store']);
    Route::get('{id}', [HotelController::class, 'show']);
    Route::put('{id}', [HotelController::class, 'update']);
    Route::delete('{id}', [HotelController::class, 'destroy']);
});

Route::prefix('foods')->group(function () {
    Route::get('/', [FoodController::class, 'index']);
    Route::post('/', [FoodController::class, 'store']);
    Route::get('{id}', [FoodController::class, 'show']);
    Route::put('{id}', [FoodController::class, 'update']);
    Route::delete('{id}', [FoodController::class, 'destroy']);
});

Route::get('dashboard', [DashboardController::class, 'index']);