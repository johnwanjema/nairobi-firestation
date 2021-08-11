<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fires', function (Blueprint $table) {
            $table->id();
            $table->string('DiscoveredBy')->nullable();
            $table->string('phoneNumber')->nullable();
            $table->string('Location')->nullable();
            $table->string('methodOfCalling')->nullable();
            $table->tim('timeOfDiscovery')->nullable();

            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fires');
    }
}
