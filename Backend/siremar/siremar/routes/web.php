<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

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
Route::post('/addbusiness', [Controller::class,'addbusiness'])->name('addbusiness');
Route::post('/addevents', [Controller::class,'addevents'])->name('addevents');
Route::post('/addmoveout', [Controller::class,'addmoveout'])->name('addmoveout');
Route::post('/addregister', [Controller::class,'addregister'])->name('addregister');
Route::post('/deleteres', [Controller::class,'deleteres'])->name('deleteres');
Route::post('/deleteins', [Controller::class,'deleteins'])->name('deleteins');
Route::post('/addschool', [Controller::class,'addschool'])->name('addschool');
Route::post('/checkuser', [Controller::class,'checkuser'])->name('checkuser');
Route::post('/getchat', [Controller::class,'getchat'])->name('getchat');
Route::post('/addchat', [Controller::class,'addchat'])->name('addchat');
Route::post('/contact', [Controller::class,'contact'])->name('contact');
Route::post('/getbusiness', [Controller::class,'getbusiness'])->name('getbusiness');
Route::post('/getcount', [Controller::class,'getcount'])->name('getcount');
Route::post('/getevents', [Controller::class,'getevents'])->name('getevents');
Route::post('/getschools', [Controller::class,'getschools'])->name('getschools');
Route::post('/getusers', [Controller::class,'getusers'])->name('getusers');
Route::post('/login', [Controller::class,'login'])->name('login');
Route::post('/register', [Controller::class,'register'])->name('register');