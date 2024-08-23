<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LoansTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('loans')->insert([
            [
                'user_id' => 1, // Asegúrate de que este ID existe en la tabla users
                'book_id' => 1, // Asegúrate de que este ID existe en la tabla books
                'loan_date' => Carbon::now()->subDays(10)->format('Y-m-d'),
                'return_date' => Carbon::now()->subDays(5)->format('Y-m-d'),
                'status' => 'returned',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'book_id' => 2,
                'loan_date' => Carbon::now()->subDays(15)->format('Y-m-d'),
                'return_date' => Carbon::now()->subDays(7)->format('Y-m-d'),
                'status' => 'returned',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 3,
                'book_id' => 3,
                'loan_date' => Carbon::now()->subDays(5)->format('Y-m-d'),
                'return_date' => null, // El libro aún no ha sido devuelto
                'status' => 'borrowed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'book_id' => 2,
                'loan_date' => Carbon::now()->subDays(3)->format('Y-m-d'),
                'return_date' => null,
                'status' => 'borrowed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
