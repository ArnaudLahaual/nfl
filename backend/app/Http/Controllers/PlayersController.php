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

    public function addPlayer(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'teamId'    => 'required|integer|exists:teams,id',
            'position' => 'required|string|max:255',
            'field' => 'required|string|max:255',
        ]);

        $player = Player::create($validated);
        return response()->json([
            'message' => 'Joueurs crée',
            "player" => $player,
        ], 201);
    }
}
