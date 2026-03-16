<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validation backend
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'nickname' => 'required|string|max:255|unique:users',
            'birthdate' => 'nullable|date',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        // Création utilisateur
        $user = User::create([
            'name' => $request->firstname . ' ' . $request->lastname,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'nickname' => $request->nickname,
            'birthdate' => $request->birthdate,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Réponse API
        return response()->json([
            'message' => 'Utilisateur créé avec succès',
            'user' => $user
        ], 201);
    }
}
