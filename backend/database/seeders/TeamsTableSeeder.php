<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamsTableSeeder extends Seeder
{
    public function run()
    {
        $json = file_get_contents(database_path('data/teams.json'));
        $teams = json_decode($json, true);

        foreach ($teams as $team) {
            DB::table('teams')->insert([
                'id' => $team['id'],
                'name' => $team['name'],
                'city' => $team['city'],
                'state' => $team['state'],
                'conference' => $team['conference'],
                'conferenceLogo' => $team['conferenceLogo'],
                'division' => $team['division'],
                'logo' => $team['logo'],
                'bgColor' => $team['bgColor'],
                'creationYear' => $team['creationYear'],
                'stadium' => $team['stadium'],
                'capacity' => $team['capacity'],
                'superBowlAppearances' => json_encode($team['superBowlAppearances']),
                'superBowlWins' => json_encode($team['superBowlWins']),
                'successRate' => $team['successRate'],
                'latitude' => $team['latitude'],
                'longitude' => $team['longitude'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
