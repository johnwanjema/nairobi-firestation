<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFS1STable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('f_s1_s', function (Blueprint $table) {
            $table->id();
            $table->string('weather')->nullable();
            $table->string('roadCondition')->nullable();
            $table->string('nameOfOccupier')->nullable();
            $table->string('timeUnderControl')->nullable();
            $table->string('timeDispatchedOfFB')->nullable();
            $table->string('timeofArrivalOfFB')->nullable();
            $table->string('whereFireStarted')->nullable();
            $table->string('whereFireSpreadTo')->nullable();
            $table->string('supposedCause')->nullable();
            $table->string('supposedCauseOfFire')->nullable();
            $table->string('particularsOfPropertyInvolved')->nullable();
            $table->string('particularsOfContent')->nullable();
            $table->string('extentOfFire')->nullable();
            $table->string('descriptionOfDamage')->nullable();
            $table->string('fireEquipmentUsed')->nullable();
            $table->boolean('fireExtinguishedByFB')->nullable();
            $table->boolean('casualties')->nullable();
            $table->bigInteger('dutyOfficer')->unsigned()->index()->nullable();
            $table->foreign('dutyOfficer')->references('id')->on('users');
            $table->bigInteger('OBID')->unsigned()->index()->nullable();
            $table->foreign('OBID')->references('id')->on('fires');
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
        Schema::dropIfExists('f_s1_s');
    }
}
