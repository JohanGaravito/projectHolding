<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'loans';

    /**
     * Los atributos que se pueden asignar de forma masiva.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'book_id',
        'loan_date',
        'return_date',
        'status',
    ];

    /**
     * Los atributos que se deben hacer visibles para los arreglos.
     *
     * @var array
     */
    protected $visible = [
        'user_id',
        'book_id',
        'loan_date',
        'return_date',
        'status',
    ];

    /**
     * Los atributos que se deben castearse a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        'loan_date' => 'date',
        'return_date' => 'date',
        'status' => 'string',
    ];

    /**
     * Obtener el usuario asociado con el préstamo.
     */
    public function user()
    {
        return $this->belongsTo(ModelUser::class);
    }

    /**
     * Obtener el libro asociado con el préstamo.
     */
    public function book()
    {
        return $this->belongsTo(ModelBooks::class);
    }
    
    //Obtener préstamos por categoría.
    public function scopeByCategory(Builder $query, $categoryId)
    {
        return $query->join('books', 'loans.book_id', '=', 'books.id')
            ->join('book_category', 'books.id', '=', 'book_category.book_id')
            ->where('book_category.category_id', $categoryId)
            ->get(['loans.*']);
    }
}
