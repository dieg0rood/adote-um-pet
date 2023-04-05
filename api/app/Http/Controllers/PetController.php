<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return Pet::get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => ['required','string','betweeen:3,100'],
            'historia' => ['required','string','betweeen:3,10000'],
            'historia' => ['required','url','betweeen:3,1000']
        ]);
        $dados = $request->all();
        return Pet::create($dados);
    }
}
