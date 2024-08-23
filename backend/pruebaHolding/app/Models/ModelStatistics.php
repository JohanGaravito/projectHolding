<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'statistics';

    /**
     * Los atributos que se deben hacer visibles para los arreglos.
     *
     * @var array
     */
    protected $visible = [
        // Puedes agregar los atributos que deseas hacer visibles aquí, si es necesario
    ];

    /**
     * Los atributos que se deben castearse a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        // Puedes agregar conversiones para atributos aquí, si es necesario
    ];

    /**
     * Indica si el modelo debe usar las marcas de tiempo.
     *
     * @var bool
     */
    public $timestamps = true; // La tabla usa marcas de tiempo

    //Obtener estadísticas para un libro específico.

    public static function getForBook($bookId)
    {
        return self::where('book_id', $bookId)->first();
    }
}
