<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teams', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('city');
        $table->string('state');
        $table->string('conference');
        $table->string('conferenceLogo');
        $table->string('division');
        $table->string('logo');
        $table->string('bgColor');
        $table->integer('creationYear');
        $table->string('stadium');
        $table->integer('capacity');
        $table->json('superBowlAppearances');
        $table->json('superBowlWins');
        $table->float('successRate')->nullable();
        $table->double('latitude', 10, 6);
        $table->double('longitude', 10, 6);
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
