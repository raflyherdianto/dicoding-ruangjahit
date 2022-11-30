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
            'name' => $this->faker->name(),
            'slug' => $this->faker->slug(),
        ];
    }
}
