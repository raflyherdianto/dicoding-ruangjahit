<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Admin 01',
                'username' => 'admin01',
                'email' => 'admin01@gmail.com',
                'first_address' => 'Jl. Raya Cibadak No. 1',
                'province_id' => 1,
                'regency_id' => 1,
                'zip_code' => '40111',
                'first_phone' => '081234567890',
                'roles' => 'admin',
                'store_name' => 'Toko 01',
                'bank_name' => 'BNI',
                'bank_account' => '1234567890',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'store_status' => 'OPEN',
                'password' => bcrypt('cobacoba'),
            ],
            [
                'name' => 'Admin 02',
                'username'=> 'admin02',
                'email' => 'admin02@gmail.com',
                'first_address' => 'Jl. Raya Cibadak No. 2',
                'province_id' => 1,
                'regency_id' => 1,
                'zip_code' => '40111',
                'first_phone' => '081234567891',
                'roles' => 'admin',
                'store_name' => 'Toko 02',
                'bank_name' => 'BNI',
                'bank_account' => '1234567891',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'store_status' => 'OPEN',
                'password' => bcrypt('cobacoba'),
            ],
            [
                'name'=> 'User 01',
                'username'=> 'user01',
                'email' => 'user01@gmail.com',
                'first_address' => 'Jl. Raya Cibadak No. 3',
                'province_id' => 1,
                'regency_id' => 1,
                'zip_code' => '40111',
                'first_phone' => '081234567892',
                'roles' => 'user',
                'store_name' => 'Toko 03',
                'bank_name' => 'BNI',
                'bank_account' => '1234567892',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'store_status' => 'OPEN',
                'password' => bcrypt('cobacoba'),
            ],
            [
                'name'=> 'User 02',
                'username'=> 'user02',
                'email' => 'user02@gmail.com',
                'first_address' => 'Jl. Raya Cibadak No. 4',
                'province_id' => 1,
                'regency_id' => 1,
                'zip_code' => '40111',
                'first_phone' => '081234567893',
                'roles' => 'user',
                'store_name' => 'Toko 04',
                'bank_name' => 'BNI',
                'bank_account' => '1234567893',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'store_status' => 'OPEN',
                'password' => bcrypt('cobacoba'),
            ],
        ];

        User::insert($user);
    }
}
