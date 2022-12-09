<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ReviewsResource;
use App\Http\Requests\StoreReviewsRequest;
use App\Http\Requests\UpdateReviewsRequest;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ReviewsResource(Reviews::with(['product'])->latest()->get());
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
     * @param  \App\Http\Requests\StoreReviewsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewsRequest $request)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        $request->validated($request->all());

        $review = Reviews::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->product_id,
            'star' => $request->star,
            'description' => $request->description,
        ]);
        $rating = Reviews::where('product_id', $request->product_id)->avg('star');
        $product = Products::where('id', $review->product_id)->first();
        $product->rating = $rating;
        $product->update();

        return response()->json([
            'message' => 'Review created successfully',
        ], 201);
        return new ReviewsResource($review);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function show(Reviews $review)
    {
        if(!$review->id) {
            return response()->json([
                'message' => 'Review not found'
            ], 404);
        } else {
            return new ReviewsResource($review);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function edit(Reviews $reviews)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReviewsRequest  $request
     * @param  \App\Models\Reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reviews $review)
    {
        if (Auth::user()->roles != 'user') {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }

        if (Auth::user()->id == $review->user_id) {
            $review->update($request->all());
            $rating = Reviews::where('product_id', $review->product_id)->avg('star');
            $product = Products::where('id', $review->product_id)->first();
            $product->rating = $rating;
            $product->save();
            return new ReviewsResource($review);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reviews $review)
    {
        if (Auth::user()->id == $review->user_id) {
            $review->delete();
            $rating = Reviews::where('product_id', $review->product_id)->avg('star');
            $products = Products::where('id', $review->product_id)->first();
            $products->rating = $rating;
            $products->save();
            return response()->json([
                'message' => 'Review deleted successfully'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
    }
}
