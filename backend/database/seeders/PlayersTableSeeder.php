<?php

namespace Database\Seeders;

use App\Models\Player;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlayersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $json = file_get_contents(database_path('data/players.json'));
        $players = json_decode($json, true);

        $players = collect($players)->unique(function ($player) {
            return $player['firstName'] . '-' . $player['lastName'] . '-' . $player['teamId'];
        });

        foreach ($players as $player) {
            if ($player['birth_date'] === '??-??-??' || str_contains($player['birth_date'], '??')) {
                $player['birth_date'] = null;
            }

            Player::create($player);
        }
    }
}
