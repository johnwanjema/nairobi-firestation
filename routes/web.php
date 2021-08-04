<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/', function () {
    return view('auth.login');
});


Route::get('/', [
    'as' => 'home',
    function () {
        return view('auth.login');
    }
]);

Route::get('logout', [
    'as' => 'logout',
    function () {
        Auth::logout();
        return redirect()->route('login');
    }
]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
