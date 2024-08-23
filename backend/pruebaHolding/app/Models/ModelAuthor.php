<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'authors';

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
     * Obtener los libros escritos por el autor.
     */
    public function books()
    {
        return $this->hasMany(ModelBooks::class);
    }
}
