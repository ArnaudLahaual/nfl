<?php

namespace Database\Seeders;

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

        foreach ($players as $player) {
            DB::table('players')->insert([
                'id' => $player['id'],
                'firstName' => $player['firstName'],
                'lastName' => $player['lastName'],
                'teamId' => $player['teamId'],
                'position' => $player['position'],
                'field' => $player['field'],
                'birth_date' => $player['birth_date'],
                'college' => $player['college'],
                'draftYear' => $player['draftYear'],
                'draftRound' => $player['draftRound'],
            ]);
        }
    }
}
