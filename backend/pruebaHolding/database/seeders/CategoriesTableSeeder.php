<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Fiction',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Non-Fiction',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Science Fiction',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fantasy',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Historical',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
