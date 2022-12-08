<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 25),
            'product_id' => $this->faker->numberBetween(1, 25),
            'star' => $this->faker->numberBetween(1, 5),
            'description' => $this->faker->text(),
        ];
    }
}
