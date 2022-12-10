<?php

namespace App\Http\Controllers;

use App\Models\Regency;
use App\Models\Province;
use Illuminate\Http\Request;
use App\Http\Resources\IndoRegionResource;

class IndoRegionController extends Controller
{
    public function indexProvince(){
        return new IndoRegionResource(Province::all());
    }

    public function indexRegency(){
        return new IndoRegionResource(Regency::all());
    }
}
