<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookAuthor extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'book_author';

    /**
     * Indica si el modelo debe usar las marcas de tiempo.
     *
     * @var bool
     */
    public $timestamps = false; // La tabla pivote no usa timestamps

    /**
     * Los atributos que se pueden asignar de forma masiva.
     *
     * @var array
     */
    protected $fillable = [
        'book_id',
        'author_id',
    ];
}
