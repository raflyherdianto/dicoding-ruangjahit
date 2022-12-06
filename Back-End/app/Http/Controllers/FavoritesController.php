<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Favorites;
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
        if (Auth::user()->roles == 'user') {
            return new FavoritesResource(Favorites::with(['product'])->where('user_id',Auth::user()->id)->latest()->get());
        }
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
    public function store(StoreFavoritesRequest $request, Products $product)
    {
        if(Auth::user()->roles == 'user'){
            $favorite = Favorites::where('user_id', Auth::user()->id)->where('product_id', $request->product_id)->first();
            if($favorite){
                return response()->json([
                    'message' => 'Product already in your favorite list'
                ], 400);
            } else {
                $request->validated($request->all());
                $favorite = Favorites::create([
                    'user_id' => Auth::user()->id,
                    'product_id' => $product->id,
                    'status'=> 1,
                ]);
                return new FavoritesResource($favorite);
            }
        }
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
    public function destroy(Favorites $favorite)
    {
        if(Auth::user()->roles == 'user'){
            $favorite->delete();
            return response()->json([
                'message' => 'Product removed from your favorite list'
            ], 200);
        }
    }
}
