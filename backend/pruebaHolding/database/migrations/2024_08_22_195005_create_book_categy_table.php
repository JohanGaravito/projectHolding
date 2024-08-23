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
        Schema::create('book_category', function (Blueprint $table) {
            $table->foreignId('book_id')->constrained('books')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade'); // BIGINT UNSIGNED, FOREIGN KEY

            // Define la clave primaria compuesta por book_id y category_id
            $table->primary(['book_id', 'category_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_category');
    }
};
