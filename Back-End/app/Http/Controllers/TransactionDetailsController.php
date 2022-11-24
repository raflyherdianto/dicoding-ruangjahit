<?php

namespace App\Http\Controllers;

use App\Models\TransactionDetails;
use App\Http\Requests\StoreTransactionDetailsRequest;
use App\Http\Requests\UpdateTransactionDetailsRequest;

class TransactionDetailsController extends Controller
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
     * @param  \App\Http\Requests\StoreTransactionDetailsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTransactionDetailsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TransactionDetails  $transactionDetails
     * @return \Illuminate\Http\Response
     */
    public function show(TransactionDetails $transactionDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TransactionDetails  $transactionDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(TransactionDetails $transactionDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTransactionDetailsRequest  $request
     * @param  \App\Models\TransactionDetails  $transactionDetails
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTransactionDetailsRequest $request, TransactionDetails $transactionDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TransactionDetails  $transactionDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(TransactionDetails $transactionDetails)
    {
        //
    }
}
