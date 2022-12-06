<?php

namespace App\Http\Controllers;

use App\Models\Regency;
use App\Models\Province;
use Illuminate\Http\Request;

class IndoRegionController extends Controller
{
    public function indexProvince(){
        $provinces = Province::all();
        return response()->json($provinces);
    }

    public function indexRegency(){
        $regencies = Regency::all();
        return response()->json($regencies);
    }
}
