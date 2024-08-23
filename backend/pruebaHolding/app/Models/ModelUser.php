<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * Los atributos que se pueden asignar de forma masiva.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * Los atributos que deben ocultarse para los arreglos.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Los atributos que se deben hacer visibles para los arreglos.
     *
     * @var array
     */
    protected $visible = [
        'name',
        'email',
    ];

    /**
     * Los atributos que deberían ser casteados a tipos nativos.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

// Obtener los usuarios más activos.
    
public function scopeMostActive(Builder $query, $limit = 10)
    {
        return $query->join('loans', 'users.id', '=', 'loans.user_id')
            ->select('users.*', \DB::raw('COUNT(loans.id) as total_loans'))
            ->groupBy('users.id')
            ->orderByDesc('total_loans')
            ->take($limit)
            ->get();
    }
}
