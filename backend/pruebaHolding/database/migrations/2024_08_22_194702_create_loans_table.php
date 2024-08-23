<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->id(); // BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->foreignId('book_id')->constrained('books')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->date('loan_date'); // DATE NOT NULL
            $table->date('return_date')->nullable(); // DATE, permite valores nulos
            $table->enum('status', ['borrowed', 'returned'])->default('borrowed'); // ENUM con valor por defecto
            $table->timestamps(); // Campos created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loans');
    }
};

