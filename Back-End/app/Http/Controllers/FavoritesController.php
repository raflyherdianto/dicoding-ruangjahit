<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use App\Http\Requests\StoreFavoritesRequest;
use App\Http\Requests\UpdateFavoritesRequest;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreFavoritesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFavoritesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function show(Favorites $favorites)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function edit(Favorites $favorites)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFavoritesRequest  $request
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFavoritesRequest $request, Favorites $favorites)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function destroy(Favorites $favorites)
    {
        //
    }
}
