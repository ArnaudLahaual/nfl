<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    public function index()
    {
        $teams = Team::all();

        //parser les strings JSON en vrais arrays
        $teams = $teams->map(function ($team) {
            if (is_string($team->superBowlAppearances)) {
                $cleaned = str_replace(['"', "'"], '', $team->superBowlAppearances);
                $team->superBowlAppearances = json_decode($cleaned, true) ?? [];
            }

            if (is_string($team->superBowlWins)) {
                $cleaned = str_replace(['"', "'"], '', $team->superBowlWins);
                $team->superBowlWins = json_decode($cleaned, true) ?? [];
            }

            return $team;
        });

        return response()->json($teams)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    }
}
