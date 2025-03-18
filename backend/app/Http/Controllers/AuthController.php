<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function Register(Request $request)
    {
        //
        $isValidated = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'email' => 'required|unique:users|email',
            'password' => 'required|confirmed|min:6',
        ]);
        if ($isValidated->fails()) {
            return response()->json(['errors' => $isValidated->errors()], 422);
        }
        $validatedData = $isValidated->validated();
        $users = new User();
        $users->name = $validatedData['name'];
        $users->email = $validatedData['email'];
        $users->password = Hash::make($validatedData['password']);
        $users->save();
        return response()->json(['success' => 'You have successfully registered'], 201);
    }
    public function Login(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ])->validated();
    
        if (Auth::attempt($validated)) { // Use Auth::attempt()
            $user = Auth::user(); // Get the authenticated user
            $token = $user->createToken('auth_token')->plainTextToken; // Create a token
    
            return response()->json([
                'message' => 'Login successful',
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email
                ],
                'token' => $token,
            ]);
        }
    
        return response()->json(['error' => 'Invalid credentials'], 401); 
    }
}