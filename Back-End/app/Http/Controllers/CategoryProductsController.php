<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoryProducts;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CategoryProductsResource;
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
        return CategoryProductsResource::collection(
            CategoryProducts::all()
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
     * @param  \App\Http\Requests\StoreCategoryProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryProductsRequest $request)
    {
        if (Auth::user()->roles == 'admin') {
            $request->validated($request->all());

            $category = CategoryProducts::create([
                'name' => $request->name,
                'slug' => $request->slug,
            ]);

            return new CategoryProductsResource($category);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
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
    public function update(Request $request, CategoryProducts $category)
    {
        if (Auth::user()->roles == 'admin') {
            $category->update($request->all());

            return new CategoryProductsResource($category);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryProducts  $categoryProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryProducts $category)
    {
        if (Auth::user()->roles == 'admin') {
            $category->delete();

            return response()->json([
                'message' => 'Category has been deleted'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
    }
}
