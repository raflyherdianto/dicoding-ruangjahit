<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Models\ImageProducts;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
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
    public function store(Request $request, Products $product, ImageProducts $imageProduct)
    {
        if (Auth::user()->roles == 'admin'){
            $validator = Validator::make($request->all(), [
                'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validation Failed',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $image = $request->file('image');
            $image->store('image-products');
            $imageProduct = ImageProducts::create([
                'image' => '/storage/'.'image-products/'.$image->hashName(),
                'product_id' => $request->product_id,
            ]);

            return new ImageProductsResource($imageProduct);
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
