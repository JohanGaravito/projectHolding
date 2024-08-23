<?php

namespace App\Http\Controllers;

use App\Models\ModelUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Mostrar la lista de usuarios.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $users = ModelUser::all();
        return view('users.index', compact('users'));
    }

    /**
     * Mostrar el formulario para crear un nuevo usuario.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * Almacenar un nuevo usuario en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return redirect()->route('users.index')->with('success', 'Usuario creado con éxito.');
    }

    /**
     * Mostrar los detalles de un usuario.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\View\View
     */
    public function show(ModelUser $user)
    {
        return view('users.show', compact('user'));
    }

    /**
     * Mostrar el formulario para editar un usuario.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\View\View
     */
    public function edit(ModelUser $user)
    {
        return view('users.edit', compact('user'));
    }

    /**
     * Actualizar un usuario en la base de datos.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, ModelUser $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);

        return redirect()->route('users.index')->with('success', 'Usuario actualizado con éxito.');
    }

    /**
     * Eliminar un usuario de la base de datos.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ModelUser $user)
    {
        $user->delete();
        return redirect()->route('users.index')->with('success', 'Usuario eliminado con éxito.');
    }

    /**
     * Mostrar los usuarios más activos.
     *
     * @return \Illuminate\View\View
     */
    public function mostActive()
    {
        $users = ModelUser::mostActive(10);
        return view('users.most_active', compact('users'));
    }
}

