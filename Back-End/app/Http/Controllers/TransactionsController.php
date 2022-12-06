<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Appointments;
use App\Models\Transactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TransactionsResource;
use App\Http\Requests\StoreTransactionsRequest;
use App\Http\Requests\UpdateTransactionsRequest;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->roles == 'user') {
            return new TransactionsResource(Transactions::with(['product'])->where('user_id',Auth::user()->id)->whereNotIn('status', ['CARTS'])->latest()->get());
        }
    }

    public function indexAdmin()
    {
        $admin = Products::where('user_id', Auth::user()->id)->first();
        return new TransactionsResource(Transactions::with(['product'])->where('product_id', $admin->id)->whereNotIn('status', ['CARTS'])->latest()->get());
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
     * @param  \App\Http\Requests\StoreTransactionsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTransactionsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function show(Transactions $transactions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function edit(Transactions $transactions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTransactionsRequest  $request
     * @param  \App\Models\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transactions $transaction)
    {
        if (Auth::user()->roles != 'admin') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $transaction->update($request->all());
        if ($transaction->status == 'PROCESSED') {
            $product = Products::where('id', $transaction->product_id)->first();
            $product->stock = $product->stock - $transaction->quantity;
            $product->save();
            $appointment = Appointments::where('transaction_id', $transaction->id)->first();
            $appointment->status = '-';
            $appointment->save();
        } else if ($transaction->status == 'FAILED') {
            $appointment = Appointments::where('transaction_id', $transaction->id)->first();
            $appointment->delete();
        } else if ($transaction->status == 'SUCCESS'){
            $appointment = Appointments::where('transaction_id', $transaction->id)->first();
            $appointment->delete();
        }
        return new TransactionsResource($transaction);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transactions  $transactions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transactions $transactions)
    {
        //
    }
}
