<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelBooks extends Model
{
    use HasFactory;

    // La tabla asociada al modelo.
    protected $table = 'books';

    // Los atributos que se pueden asignar masivamente.
    protected $fillable = [
        'title',
        'author',
        'isbn',
        'published_date',
        'stock',
    ];

    // Los atributos que deberían ser ocultados para arreglos.
    protected $hidden = [];

    // Los atributos que deberían ser casteados a tipos nativos.
    protected $casts = [
        'published_date' => 'date',
    ];

    // Definir cualquier relación si es necesario
    // Ejemplo:
    // public function authors()
    // {
    //     return $this->belongsToMany(Author::class, 'book_author');
    // }
}
