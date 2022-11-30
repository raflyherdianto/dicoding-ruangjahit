<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ImageProducts;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ImageProductsResource;
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
        return ImageProductsResource::collection(
            ImageProducts::all()
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
     * @param  \App\Http\Requests\StoreImageProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImageProductsRequest $request)
    {
        if (Auth::user()->roles == 'admin') {
            $request->validated($request->all());

            $product = ImageProducts::create([
                'image' => $request->image,
                'product_id' => $request->product_id,
            ]);
            return new ImageProductsResource($product);

        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function show(ImageProducts $imageProduct)
    {
        if(!$imageProduct->id) {
            return response()->json([
                'message' => 'Image not found'
            ], 404);
        } else {
            return new ImageProductsResource($imageProduct);
        }
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
    public function update(Request $request, ImageProducts $imageProduct)
    {
        if (Auth::user()->roles == 'admin') {
            $imageProduct->update($request->all());

            return new ImageProductsResource($imageProduct);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImageProducts  $imageProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageProducts $imageProduct)
    {
        if (Auth::user()->roles == 'admin') {
            $imageProduct->delete();

            return response()->json([
                'message' => 'Image has been deleted'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
    }
}
