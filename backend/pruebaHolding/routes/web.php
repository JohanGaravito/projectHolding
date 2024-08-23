<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BookHistoryController;
use App\Http\Controllers\StatisticsController;

/*
Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, 'index']); // Obtener todos los libros
    Route::get('/{id}', [BookController::class, 'show']); // Obtener un libro por ID
    Route::post('/crear', [BookController::class, 'store']); // Crear un nuevo libro
    Route::put('/{id}', [BookController::class, 'update']); // Actualizar un libro
    Route::delete('/{id}', [BookController::class, 'destroy']); // Eliminar un libro
});*/


Route::prefix('booksHistory')->group(function () { // Obtener todos los libros
    Route::get('/{id}', [BookHistoryController::class, 'show']); // Obtener un libro por ID
});

Route::get('/', function () {
    return view('welcome');
});
