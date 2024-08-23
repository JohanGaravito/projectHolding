<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class StatisticsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statistics')->insert([
            [
                'book_id' => 1,
                'total_loans' => 15,
                'last_loan_date' => Carbon::create(2024, 8, 22),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'book_id' => 2,
                'total_loans' => 10,
                'last_loan_date' => Carbon::create(2024, 8, 20),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'book_id' => 3,
                'total_loans' => 5,
                'last_loan_date' => Carbon::create(2024, 8, 21),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // Agrega más registros si es necesario
        ]);
    }
}
