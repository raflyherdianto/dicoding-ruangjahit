<?php

namespace App\Http\Controllers;

use App\Models\Appointments;
use App\Http\Requests\StoreAppointmentsRequest;
use App\Http\Requests\UpdateAppointmentsRequest;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new AppointmentsResource(Appointments::get());
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
        $request->validated($request->all());

        $appointment = appointments::create([
            'user_id' => Auth::user()->id,
            'product_id' => $request->product_id,
            'deadline' => $request->deadline,
            'status' => $request->status,
        ]);

        return new AppointmentsResource($appointment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function show(Appointments $appointments)
    {
        if(!$appointment->id) {
            return response()->json([
                'message' => 'Appoinments not found'
            ], 404);
        } else {
            return new AppointmentsResource($appointment);
        }
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
    public function update(UpdateAppointmentsRequest $request, Appointments $appointments)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointments $appointments)
    {
        if (Auth::user()->id == $appointment->user_id) {
            $appointment->delete();
            return response()->json([
                'message' => 'Cancelling an Appointment success'
            ], 200);
        } else {
            return response()->json([
                'message' => 'You are not authorized to make request',
            ], 403);
        }
    }
}
