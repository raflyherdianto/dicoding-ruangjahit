<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('product_id')->constrained('products');
            $table->string('code');
            $table->integer('quantity');
            $table->string('custom_size');
            $table->bigInteger('total_price');
            $table->bigInteger('insurance_price');
            $table->bigInteger('shipping_price');
            $table->enum('status', ['CARTS','PENDING', 'PROCESSED', 'SUCCESS', 'FAILED', 'SHIPPING']);
            $table->string('resi');
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
        Schema::dropIfExists('transactions');
    }
}
