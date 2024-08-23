<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Juan Pérez',
                'email' => 'juan.perez@example.com',
                'password' => Hash::make('password123'), // Encriptar la contraseña
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ana Gómez',
                'email' => 'ana.gomez@example.com',
                'password' => Hash::make('password456'), // Encriptar la contraseña
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Luis Martínez',
                'email' => 'luis.martinez@example.com',
                'password' => Hash::make('password789'), // Encriptar la contraseña
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
