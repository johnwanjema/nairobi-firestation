<?php

namespace App\Http\Controllers;

use App\Models\Fire;
use App\Models\FireMan;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function dashboardStats()
    {
        $data = [];
        $fires = Fire::all()->count();
        $data['fires'] = $fires;
        return api_response(true,null, 200, 'success','successfully fetched dashboard data.', $data);
    }
}
