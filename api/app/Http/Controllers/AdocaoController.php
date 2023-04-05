<?php

namespace App\Http\Controllers;

use App\Models\Adocao;
use Illuminate\Http\Request;

class AdocaoController extends Controller
{
    public function index()
    {
        
    }
    public function store(Request $request)
    {
        $request->validate([
            "email" => ['required','email'],
            "valor" => ['required','numeric','between:10,10000'],
            "pet_id" => ['required','int','exists:pets,id']
        ]);

        $dados = $request->all();
        return Adocao::create($dados);
    }
}
