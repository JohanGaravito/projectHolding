<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BookHistoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('book_histories')->insert([
            [
                'loan_id' => 1,
                'user_id' => 1,
                'book_id' => 1,
                'loan_date' => Carbon::create(2024, 8, 22),
                'return_date' => Carbon::create(2024, 8, 29),
                'created_at' => Carbon::now(),
            ],
            [
                'loan_id' => 2,
                'user_id' => 2,
                'book_id' => 2,
                'loan_date' => Carbon::create(2024, 8, 20),
                'return_date' => Carbon::create(2024, 8, 27),
                'created_at' => Carbon::now(),
            ],
            [
                'loan_id' => 3,
                'user_id' => 3,
                'book_id' => 3,
                'loan_date' => Carbon::create(2024, 8, 21),
                'return_date' => Carbon::create(2024, 8, 28),
                'created_at' => Carbon::now(),
            ],
            // Agrega más registros si es necesario
        ]);
    }
}
