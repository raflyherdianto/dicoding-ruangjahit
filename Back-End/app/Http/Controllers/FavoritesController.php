<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\FavoritesResource;
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
        return new FavoritesResource(Favorites::with(['product'])->latest()->get());
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
        $request->validated($request->all());

        $favorite = favorites::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->product_id,
            'status' => $request->status,
        ]);

        return new FavoritesResource($favorite);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function show(Favorites $favorites)
    {
        if(!$favorite->id) {
            return response()->json([
                'message' => 'Favorite not found'
            ], 404);
        } else {
            return new FavoritesResource($favorite);
        }
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
        if (Auth::user()->id == $favorite->user_id) {
            $favorite->delete();
            return response()->json([
                'message' => 'Remove product from favorite success'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
    }
}