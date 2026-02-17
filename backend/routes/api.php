<?php

use App\Http\Controllers\PlayersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeamsController;

Route::get('/teams', [TeamsController::class, 'index']);
Route::get('/players', [PlayersController::class, 'index']);
