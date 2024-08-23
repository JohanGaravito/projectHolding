<?php

namespace App\Http\Controllers;

use App\Models\ModelCategories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Mostrar la lista de categorías.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $categories = ModelCategories::all();
        return view('categories.index', compact('categories'));
    }

    /**
     * Mostrar el formulario para crear una nueva categoría.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('categories.create');
    }

    /**
     * Almacenar una nueva categoría en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        ModelCategories::create($request->only('name'));

        return redirect()->route('categories.index')->with('success', 'Categoría creada con éxito.');
    }

    /**
     * Mostrar los detalles de una categoría.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\View\View
     */
    public function show(ModelCategories $category)
    {
        return view('categories.show', compact('category'));
    }

    /**
     * Mostrar el formulario para editar una categoría.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\View\View
     */
    public function edit(ModelCategories $category)
    {
        return view('categories.edit', compact('category'));
    }

    /**
     * Actualizar una categoría en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, ModelCategories $category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category->update($request->only('name'));

        return redirect()->route('categories.index')->with('success', 'Categoría actualizada con éxito.');
    }

    /**
     * Eliminar una categoría de la base de datos.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ModelCategories $category)
    {
        $category->delete();
        return redirect()->route('categories.index')->with('success', 'Categoría eliminada con éxito.');
    }

    /**
     * Mostrar los libros en una categoría específica.
     *
     * @param int $categoryId
     * @return \Illuminate\View\View
     */
    public function booksInCategory($categoryId)
    {
        $books = ModelCategories::booksInCategory($categoryId);
        return view('categories.books_in_category', compact('books'));
    }
}
