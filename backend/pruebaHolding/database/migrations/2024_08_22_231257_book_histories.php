<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends  Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_histories', function (Blueprint $table) {
            $table->id(); // BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY
            $table->foreignId('loan_id')->constrained('loans')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->foreignId('book_id')->constrained('books')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->date('loan_date')->nullable(false); // DATE NOT NULL
            $table->date('return_date')->nullable(); // DATE NULLABLE
            $table->timestamp('created_at')->useCurrent(); // TIMESTAMP DEFAULT CURRENT_TIMESTAMP

            // El campo 'updated_at' no se incluye en la tabla original, por lo tanto, se omite aquí.
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_histories');
    }
};
