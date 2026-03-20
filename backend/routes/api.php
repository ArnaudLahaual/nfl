<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlayersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeamsController;

//get
Route::get('/teams', [TeamsController::class, 'index']);
Route::get('/players', [PlayersController::class, 'index']);

//post
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//routes middleware accessibles uniquement aux personnes connectées<z

// Route::middleware('auth:sanctum')->get('/user', function(Request $request) {
//     return $request->user();
// });
// Route::middleware('auth:sanctum')->get('/players', [PlayersController::class, 'index']);
Route::middleware('auth:sanctum')->post('/addPlayer', [PlayersController::class, 'addPlayer']);
