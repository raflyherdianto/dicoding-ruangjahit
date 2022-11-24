<?php

namespace App\Http\Controllers;

use App\Models\ImageProducts;
use App\Http\Requests\StoreImageProductsRequest;
use App\Http\Requests\UpdateImageProductsRequest;

class ImageProductsController extends Controller
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
     * @param  \App\Http\Requests\StoreImageProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImageProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function show(ImageProducts $imageProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function edit(ImageProducts $imageProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateImageProductsRequest  $request
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateImageProductsRequest $request, ImageProducts $imageProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageProducts $imageProducts)
    {
        //
    }
}
