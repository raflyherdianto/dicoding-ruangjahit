<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FavoritesFactory extends Factory
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
            'status'=> $this->faker->numberBetween(0, 1),
            'created_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
            'updated_at'=> $this->faker->dateTimeThisYear($max = 'now', $timezone = 'Asia/Jakarta'),
        ];
    }
}
