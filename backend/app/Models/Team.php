<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';

    public $timestamps = true;

    protected $cast = [
        'superBowlAppearances' => 'array',
        'superBowlWins' => 'array',
    ];

    protected $fillable = [
        'name',
        'city',
        'state',
        'conference',
        'conferenceLogo',
        'division',
        'logo',
        'bgColor',
        'creationYear',
        'stadium',
        'capacity',
        'superbowl',
    ];
}
