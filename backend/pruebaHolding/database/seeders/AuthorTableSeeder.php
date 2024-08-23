<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('authors')->insert([
            [
                'name' => 'Gabriel García Márquez',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Miguel de Cervantes',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Carlos Ruiz Zafón',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
