<?php

namespace Database\Seeders;

use App\Models\CategoryProducts;
use App\Models\Favorites;
use App\Models\ImageProducts;
use App\Models\Products;
use App\Models\Reviews;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            IndoRegionProvinceSeeder::class,
            IndoRegionRegencySeeder::class,
            IndoRegionDistrictSeeder::class,
            IndoRegionVillageSeeder::class,
            UserSeeder::class,
        ]);
        User::factory(25)->create();
        CategoryProducts::factory(25)->create();
        Products::factory(25)->create();
        Favorites::factory(25)->create();
        Reviews::factory(25)->create();
        ImageProducts::factory(25)->create();
    }
}
