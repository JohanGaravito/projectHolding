<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ModelBooks;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookController extends Controller
{
    // Obtener todos los libros
    public function index()
    {
        $books = ModelBooks::all();
        return response()->json($books, Response::HTTP_OK);
    }

    // Obtener un libro por ID
    public function show($id)
    {
        $book = ModelBooks::find($id);

        if ($book) {
            return response()->json($book, Response::HTTP_OK);
        } else {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }
    }

    // Crear un nuevo libro
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'isbn' => 'required|string|size:13',
            'published_date' => 'required|date',
            'stock' => 'required|integer|min:0',
        ]);

        $book = ModelBooks::create($validated);
        return response()->json($book, Response::HTTP_CREATED);
    }

    // Actualizar un libro existente
    public function update(Request $request, $id)
    {
        $book = ModelBooks::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            'title' => 'string|max:255',
            'author' => 'string|max:255',
            'isbn' => 'string|size:13',
            'published_date' => 'date',
            'stock' => 'integer|min:0',
        ]);

        $book->update($validated);
        return response()->json($book, Response::HTTP_OK);
    }

    // Eliminar un libro
    public function destroy($id)
    {
        $book = ModelBooks::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }

        $book->delete();
        return response()->json(['message' => 'Book deleted successfully'], Response::HTTP_OK);
    }
}
