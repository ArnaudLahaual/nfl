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

        $positionsMap = [
            'QB' => 'Quarterback',
            'RB' => 'Running Back',
            'WR' => 'Wide Receiver',
            'TE' => 'Tight End',
            'OT' => 'Offensive Tackle',
            'OG' => 'Offensive Guard',
            'C'  => 'Center',

            'DE' => 'Defensive End',
            'DT' => 'Defensive Tackle',
            'OLB' => 'Outside Linebacker',
            'LB' => 'Linebacker',
            'CB' => 'Cornerback',
            'S'  => 'Safety',

            'K'  => 'Kicker',
            'P'  => 'Punter',
            'LS' => 'Long Snapper',

            'OL' => 'Offensive Lineman',
            'DL' => 'Defensive Lineman',
            'DB' => 'Defensive Back',
        ];

        foreach ($players as $player) {
            $fullPosition = $positionsMap[$player['position']] ?? $player['position'];

            Player::updateOrCreate(
                [
                    'firstName' => $player['firstName'],
                    'lastName'  => $player['lastName'],
                    'teamId'    => $player['teamId'],
                ],
                [
                    'position'  => $fullPosition,
                    'field'     => $player['field'],
                ]
            );
        }
    }
}
