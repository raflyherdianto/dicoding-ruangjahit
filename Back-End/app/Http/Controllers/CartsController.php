<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CartsResource;
use App\Http\Requests\StoreCartsRequest;
use App\Http\Requests\UpdateCartsRequest;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CartsResource::collection(
            Carts::all()
        );
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
     * @param  \App\Http\Requests\StoreCartsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartsRequest $request)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $request->validated($request->all());
        $cart = Carts::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'custom_size' => $request->custom_size,
        ]);
        return new CartsResource($cart);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function show(Carts $cart)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        if (!$cart->id) {
            return response()->json([
                'message' => 'Cart not found'
            ], 404);
        } else {
            return new CartsResource($cart);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function edit(Carts $carts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartsRequest  $request
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carts $cart)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $cart->update($request->all());

        return new CartsResource($cart);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carts $cart)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $cart->delete();

        return response()->json([
            'message' => 'Cart has been deleted'
        ], 200);
    }
}
