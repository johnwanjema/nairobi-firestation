<?php

namespace App\Http\Controllers;

use App\Models\Fire;
use Illuminate\Http\Request;

class FireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fires = Fire::orderBy('created_at', 'DESC')->get();
        return api_response(true, null, 200, 'success', 'successfully paginated fetched fires', $fires);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            //   'unitId','amount','expenseName','notes'
            $fire = new Fire();
            $fire->discoveredBy = $request['discoveredBy'];
            $fire->phoneNumber = $request['phoneNumber'];
            $fire->Location = $request['location'];
            $fire->methodOfCalling = $request['methodOfCalling'];
            $fire->timeOfDiscovery = $request['timeOfDiscovery'];
            $fire->save();

            return api_response(true, null, 200, 'success', 'successfully saved fire', $fire);
        } catch (\Exception $exception) {
            return api_response(true, $exception->getMessage(), 200, 'error', 'error saving fire', null);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Fire  $fire
     * @return \Illuminate\Http\Response
     */
    public function show(Fire $fire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Fire  $fire
     * @return \Illuminate\Http\Response
     */
    public function edit(Fire $fire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Fire  $fire
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fire $fire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fire  $fire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fire $fire)
    {
        //
    }
}
