<?php

namespace App\Http\Controllers;

use App\Models\ModelStatistics;
use App\Models\ModelBook;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    /**
     * Mostrar las estadísticas de un libro específico.
     *
     * @param \App\Models\Book $book
     * @return \Illuminate\View\View
     */
    public function show(ModelBook $book)
    {
        $statistics = ModelStatistics::getForBook($book->id);
        return view('statistics.show', compact('book', 'statistics'));
    }
}
