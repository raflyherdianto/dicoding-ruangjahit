<?php

namespace Database\Factories;

use App\Models\CategoryProducts;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->languageCode(),
            'slug' => $this->faker->slug(),
            'created_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
            'updated_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
        ];
    }
}
