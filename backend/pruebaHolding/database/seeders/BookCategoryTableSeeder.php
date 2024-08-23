<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookCategoryTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('book_category')->insert([
            [
                'book_id' => 1, // Asegúrate de que este ID existe en la tabla books
                'category_id' => 1, // Asegúrate de que este ID existe en la tabla categories
            ],
            [
                'book_id' => 1,
                'category_id' => 2,
            ],
            [
                'book_id' => 2,
                'category_id' => 3,
            ],
            [
                'book_id' => 3,
                'category_id' => 4,
            ],
            [
                'book_id' => 3,
                'category_id' => 5,
            ],
            [
                'book_id' => 2,
                'category_id' => 1,
            ],
        ]);
    }
}
