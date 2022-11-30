<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
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
        return ReviewsResource::collection(
            Reviews::all()
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
     * @param  \App\Http\Requests\StoreReviewsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewsRequest $request)
    {
        if (Auth::user()->roles == 'user') {

            $request->validated($request->all());

            $review = Reviews::create([
                'user_id' => Auth::user()->id,
                'product_id' => $request->product_id,
                'star' => $request->star,
                'description' => $request->description,
            ]);

            return new ReviewsResource($review);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
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
        if (Auth::user()->roles == 'user') {
            $review->update($request->all());

            return new ReviewsResource($review);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
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
        if(!Auth::user()){
            return response()->json([
                'message' => 'You are not authorized to make request'
            ], 401);
        }
        $review->delete();

        return response()->json([
            'message' => 'Review has been deleted'
        ], 200);
    }
}
