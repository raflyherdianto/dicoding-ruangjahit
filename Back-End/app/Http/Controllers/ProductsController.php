<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductsResource;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductsResource::collection(
            Products::all()
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
     * @param  \App\Http\Requests\StoreProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductsRequest $request)
    {
        if (Auth::user()->roles != 'admin') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $request->validated($request->all());

        $product = Products::create([
            'name' => $request->name,
            'user_id' => Auth::user()->id,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'category_product_id' => $request->category_product_id,
            'size' => $request->size,
            'color' => $request->color,
            'weight' => $request->weight,
        ]);
        return new ProductsResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(Products $product)
    {
        if (!$product->id) {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        } else {
            return new ProductsResource($product);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductsRequest  $request
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Products $product)
    {
        if (Auth::user()->roles != 'admin') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $product->update($request->all());

        return new ProductsResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(Products $product)
    {
        if (Auth::user()->roles != 'admin') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $product->delete();

        return response()->json([
            'message' => 'Product has been deleted'
        ], 200);
    }
}
