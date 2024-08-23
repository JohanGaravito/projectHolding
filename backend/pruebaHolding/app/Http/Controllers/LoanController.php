<?php

namespace App\Http\Controllers;

use App\Models\ModelLoans;
use App\Models\ModelBook;
use App\Models\ModelUser;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    /**
     * Mostrar la lista de préstamos.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $loans = ModelLoans::all();
        return view('loans.index', compact('loans'));
    }

    /**
     * Mostrar el formulario para crear un nuevo préstamo.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $books = ModelBook::all();
        $users = ModelUser::all();
        return view('loans.create', compact('books', 'users'));
    }

    /**
     * Almacenar un nuevo préstamo en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'book_id' => 'required|exists:books,id',
            'loan_date' => 'required|date',
            'return_date' => 'nullable|date|after_or_equal:loan_date',
        ]);

        ModelLoans::create($request->only('user_id', 'book_id', 'loan_date', 'return_date'));

        return redirect()->route('loans.index')->with('success', 'Préstamo creado con éxito.');
    }

    /**
     * Mostrar los detalles de un préstamo.
     *
     * @param \App\Models\Loan $loan
     * @return \Illuminate\View\View
     */
    public function show(ModelLoans $loan)
    {
        return view('loans.show', compact('loan'));
    }

    /**
     * Mostrar el formulario para editar un préstamo.
     *
     * @param \App\Models\Loan $loan
     * @return \Illuminate\View\View
     */
    public function edit(ModelLoans $loan)
    {
        $books = ModelBook::all();
        $users = ModelUser::all();
        return view('loans.edit', compact('loan', 'books', 'users'));
    }

    /**
     * Actualizar un préstamo en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Loan $loan
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, ModelLoans $loan)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'book_id' => 'required|exists:books,id',
            'loan_date' => 'required|date',
            'return_date' => 'nullable|date|after_or_equal:loan_date',
        ]);

        $loan->update($request->only('user_id', 'book_id', 'loan_date', 'return_date'));

        return redirect()->route('loans.index')->with('success', 'Préstamo actualizado con éxito.');
    }

    /**
     * Eliminar un préstamo de la base de datos.
     *
     * @param \App\Models\Loan $loan
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ModelLoans $loan)
    {
        $loan->delete();
        return redirect()->route('loans.index')->with('success', 'Préstamo eliminado con éxito.');
    }

    /**
     * Mostrar préstamos por categoría.
     *
     * @param int $categoryId
     * @return \Illuminate\View\View
     */
    public function byCategory($categoryId)
    {
        $loans = ModelLoans::byCategory($categoryId);
        return view('loans.by_category', compact('loans'));
    }
}
