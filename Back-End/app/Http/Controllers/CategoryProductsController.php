<?php

namespace App\Http\Controllers;

use App\Models\CategoryProducts;
use App\Http\Requests\StoreCategoryProductsRequest;
use App\Http\Requests\UpdateCategoryProductsRequest;

class CategoryProductsController extends Controller
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
     * @param  \App\Http\Requests\StoreCategoryProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryProducts  $categoryProducts
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryProducts $categoryProducts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoryProducts  $categoryProducts
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryProducts $categoryProducts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryProductsRequest  $request
     * @param  \App\Models\CategoryProducts  $categoryProducts
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryProductsRequest $request, CategoryProducts $categoryProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryProducts  $categoryProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryProducts $categoryProducts)
    {
        //
    }
}
