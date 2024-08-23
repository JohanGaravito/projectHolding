<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ModelBooks;

class BookHistory extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'book_histories';

    /**
     * Los atributos que se pueden asignar de forma masiva.
     *
     * @var array
     */
    protected $fillable = [
        'loan_id',
        'user_id',
        'book_id',
        'loan_date',
        'return_date',
    ];

    /**
     * Los atributos que se deben hacer visibles para los arreglos.
     *
     * @var array
     */
    protected $visible = [
        'loan_id',
        'user_id',
        'book_id',
        'loan_date',
        'return_date',
    ];

    /**
     * Los atributos que se deben castearse a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        'loan_date' => 'date',
        'return_date' => 'date',
    ];

    /**
     * Relación con el modelo Loan.
     */
    public function loan()
    {
        return $this->belongsTo(ModelUser::class);
    }

    /**
     * Relación con el modelo User.
     */
    public function user()
    {
        return $this->belongsTo(ModelUser::class);
    }

    /**
     * Relación con el modelo Book.
     */
    public function book()
    {
        return $this->belongsTo(ModelBook::class);
    }

    // Obtener el historial de préstamos para un libro específico.

    public static function historyForBook($bookId)
    {
        return self::where('book_id', $bookId)
            ->orderBy('loan_date', 'desc')
            ->get();
    }
    
}
