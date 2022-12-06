<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Appointments;
use App\Models\Transactions;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\AppointmentsResource;
use App\Http\Requests\StoreAppointmentsRequest;
use App\Http\Requests\UpdateAppointmentsRequest;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->roles == 'user') {
            $user = Transactions::where('user_id', Auth::user()->id)->first();
            return new AppointmentsResource(Appointments::with(['transaction'])->where('transaction_id',$user->id)->whereNotIn('status', ['CARTS', 'PENDING'])->latest()->get());
        }
    }

    public function indexAdmin()
    {
        if (Auth::user()->roles == 'admin') {
            $admin = Products::where('user_id', auth()->user()->id)->first();
            $admine = Transactions::where('product_id', $admin->id)->first();
            return new AppointmentsResource(Appointments::with(['transaction'])->where('transaction_id', $admine->id)->whereNotIn('status', ['CARTS'])->latest()->get());
        }
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
     * @param  \App\Http\Requests\StoreAppointmentsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAppointmentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function show(Appointments $appointments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointments $appointments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAppointmentsRequest  $request
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $appointment = Appointments::findOrFail($id);
        if (Auth::user()->roles == 'admin') {
            $admin = Products::where('user_id', auth()->user()->id)->first();
            $admine = Transactions::where('product_id', $admin->id)->first();
            $appointmentse = Appointments::where('transaction_id', $admine->id)->first();
            if ($appointmentse->id != $appointment->id) {
                return response()->json([
                    'message' => 'You are not authorized to make request',
                ], 403);
            }
            $appointment->update($request->all());
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
        return new AppointmentsResource($appointment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointments $appointments)
    {
        //
    }
}
