<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MoviesController extends Controller
{
    public function index()
    {
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => env('API_KEY'),
            'X-RapidAPI-Host' => 'ott-details.p.rapidapi.com'
        ])->get('https://ott-details.p.rapidapi.com/advancedsearch', [
            'language' => 'english',
            'type' => 'movie',
            'sort' => 'latest',
        ]);

        return response()->json($response->json());
    }

    public function single($imdbid)
    {
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => env('API_KEY'),
            'X-RapidAPI-Host' => 'ott-details.p.rapidapi.com'
        ])->get('https://ott-details.p.rapidapi.com/gettitleDetails', [
            'imdbid' => $imdbid,
            'page' => '1'
        ]);

        return response()->json($response->json());
    }

    public function search($search)
    {
        $response = Http::withHeaders([
            'X-RapidAPI-Key' => env('API_KEY'),
            'X-RapidAPI-Host' => 'ott-details.p.rapidapi.com'
        ])->get('https://ott-details.p.rapidapi.com/search', [
            'title' => $search,
            'page' => '1'
        ]);

        return response()->json($response->json());
    }
}
//olcia.pl
