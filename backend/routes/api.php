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
