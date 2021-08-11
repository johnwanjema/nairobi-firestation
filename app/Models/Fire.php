<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fire extends Model
{
    use HasFactory;

    protected $fillable=['discoveredBy','phoneNumber','Location','methodOfCalling','timeOfDiscovery'];
}
