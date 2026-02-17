<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class PlayersController extends Controller
{
    public function index()
    {
        $players = Player::all();

        return response()->json($players);
    }
}
