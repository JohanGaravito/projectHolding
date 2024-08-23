<?php

namespace App\Http\Controllers;

use App\Models\ModelBookHistories;
use App\Models\ModelBooks;
use Illuminate\Http\Request;

class BookHistoryController extends Controller
{
    /**
     * Mostrar el historial de un libro específico.
     *
     * @param \App\Models\Book $book
     * @return \Illuminate\View\View
     */
    public function show(ModelBooks $book)
    {
        // Obtén el historial del libro usando la relación o método en el modelo
        $history = ModelBookHistories::historyForBook($book->id);
    
        // Retorna el libro y su historial en formato JSON
        return response()->json([
            'book' => $book,
            'history' => $history
        ], 200); // 200 indica que la solicitud fue exitosa
    }
    
}
