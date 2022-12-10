<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Models\Products;
use App\Models\Appointments;
use App\Models\Transactions;
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
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        return new CartsResource(Carts::with(['product'])->where('user_id',Auth::user()->id)->latest()->get());
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
    public function store(StoreCartsRequest $request, Products $product)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $request->validated($request->all());
        $cart = Carts::create([
            'user_id' => Auth::user()->id,
            'product_id' => $product->id,
            'quantity' => $request->quantity,
            'custom_size' => $request->custom_size,
        ]);
        $total_price = $product->price * $request->quantity;
        $transaction = Transactions::where('user_id', Auth::user()->id)->where('status', 'CARTS')->first();
        if (!$transaction) {
            $transaction = Transactions::create([
                'user_id' => auth()->user()->id,
                'insurance_price' => 10000,
                'shipping_price' => 10000,
                'total_price' => $total_price,
                'resi' => '0',
                'code' => 'TR'.mt_rand(10000000, 99999999),
                'product_id' => $product->id,
                'quantity' => $request->quantity,
                'price' => $product->price,
                'custom_size' => $cart->custom_size,
                'status'=> 'CARTS'
            ]);
        } else {
            $transaction->total_price += $total_price;
            $transaction->update();
        }
        if ($cart->custom_size != null){
            $appointment = Appointments::create([
                'transaction_id' => $transaction->id,
                'deadline' => $request->deadline,
                'status' => 'CARTS',
            ]);
            $appointment->update();
        }
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
        $transaction = Transactions::where('user_id', Auth::user()->id)->where('status', 'CARTS')->first();
        $transaction->delete();
        $cart->delete();

        return response()->json([
            'message' => 'Cart has been deleted'
        ], 200);
    }

    public function checkout(Carts $cart){
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $carts = Carts::where('user_id', Auth::user()->id)->where('id', $cart)->get();
        $total_price = 0;
        foreach ($carts as $cart) {
            $total_price += $cart->product->price * $cart->quantity;
        }
        $transaction = Transactions::where('user_id', Auth::user()->id)->where('status', 'CARTS')->first();
        $transaction->status = 'PENDING';
        $transaction->save();
        $cart->delete();

        return response()->json([
            'message' => 'Checkout success','Your transaction code '. $transaction->code, 'Total price is ' . $total_price, 'Transfer to BCA 1234567890 a/n PT. RuangJahit', 'Please send your payment proof to Admin (08123456789)','Please Screenshot this page', 'Thank you for shopping with us'
        ], 200);
    }
}

