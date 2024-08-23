<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookAuthorTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('book_author')->insert([
            [
                'book_id' => 1, // Asegúrate de que estos IDs existan en tu tabla books
                'author_id' => 1, // Asegúrate de que estos IDs existan en tu tabla authors
            ],
            [
                'book_id' => 2,
                'author_id' => 2,
            ],
            [
                'book_id' => 3,
                'author_id' => 3,
            ],
        ]);
    }
}
