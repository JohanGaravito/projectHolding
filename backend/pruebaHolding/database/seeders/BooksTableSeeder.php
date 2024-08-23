<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            [
                'title' => 'Cien años de soledad',
                'author' => 'Gabriel García Márquez',
                'isbn' => '9780060883287',
                'published_date' => '1967-06-05',
                'stock' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Don Quijote de la Mancha',
                'author' => 'Miguel de Cervantes',
                'isbn' => '9780142437230',
                'published_date' => '1605-01-16',
                'stock' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'La sombra del viento',
                'author' => 'Carlos Ruiz Zafón',
                'isbn' => '9788408090146',
                'published_date' => '2001-04-17',
                'stock' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
