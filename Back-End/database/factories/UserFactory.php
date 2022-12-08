<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
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
            'email' => $this->faker->unique()->safeEmail(),
            'username' => $this->faker->unique()->userName(),
            'password' => 'cobacoba', // password
            'first_address' => $this->faker->address(),
            'province_id' => $this->faker->numberBetween(1, 34),
            'regency_id' => $this->faker->numberBetween(1, 50),
            'zip_code' => $this->faker->postcode(),
            'first_phone' => $this->faker->unique()->phoneNumber(),
            'roles' => $this->faker->randomElement(['admin', 'user']),
            'store_name' => $this->faker->unique()->company(),
            'bank_name' => $this->faker->randomElement(['BNI', 'BRI', 'BCA', 'Mandiri']),
            'bank_account' => $this->faker->unique()->bankAccountNumber(),
            'open_time' => $this->faker->time(),
            'close_time' => $this->faker->time(),
            'store_status' => $this->faker->randomElement(['OPEN', 'CLOSED']),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
