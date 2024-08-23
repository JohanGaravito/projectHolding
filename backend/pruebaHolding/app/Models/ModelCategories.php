<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'categories';

    /**
     * Los atributos que se pueden asignar de forma masiva.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Los atributos que se deben hacer visibles para los arreglos.
     *
     * @var array
     */
    protected $visible = [
        'name',
    ];

    /**
     * Los atributos que se deben castearse a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        // No hay atributos para castear en este caso
    ];

    /**
     * Obtener los préstamos asociados con la categoría.
     */
    public function loans()
    {
        return $this->hasMany(ModelLoans::class);
    }

    //Obtener todos los libros en una categoría específica.

    public static function booksInCategory($categoryId)
    {
        return self::join('book_category', 'categories.id', '=', 'book_category.category_id')
            ->join('books', 'book_category.book_id', '=', 'books.id')
            ->where('categories.id', $categoryId)
            ->get(['books.*']);
    }
}
