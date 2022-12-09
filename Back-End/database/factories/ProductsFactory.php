<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'user_id'=> $this->faker->numberBetween(1, 25),
            'category_product_id'=> $this->faker->numberBetween(1, 25),
            'price'=> $this->faker->numberBetween(10000, 100000),
            'description'=> $this->faker->sentence(),
            'rating'=> $this->faker->numberBetween(1, 5),
            'color'=> $this->faker->colorName(),
            'stock'=> $this->faker->numberBetween(1, 100),
            'weight'=> $this->faker->numberBetween(1, 100),
            'size'=> $this->faker->randomElement(['S', 'M', 'L', 'XL', 'XXL', 'CUSTOM']),
            'created_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
            'updated_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
        ];
    }
}
