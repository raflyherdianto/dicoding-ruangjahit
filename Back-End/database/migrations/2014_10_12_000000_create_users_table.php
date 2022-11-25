<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('first_address');
            $table->string('second_address')->nullable();
            $table->foreignId('province_id');
            $table->foreignId('regency_id');
            $table->string('zip_code');
            $table->string('first_phone');
            $table->string('second_phone')->nullable();
            $table->enum('roles', ['admin', 'user'])->default('user');
            $table->string('store_name')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bank_account')->nullable();
            $table->timeTz('open_time')->nullable();
            $table->timeTz('close_time')->nullable();
            $table->enum('store_status',['OPEN', 'CLOSED'])->nullable();
            $table->foreignId('category_product_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
