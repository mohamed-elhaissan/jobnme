<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'mohamed@gmail.com',
                'password' => hash::make('12345678'),
                'role' => 'admin',
            ],
            [
                'name' => 'mjid',
                'email' => 'mjid@gmail.com',
                'password' => hash::make('12340000'),
                'role' => 'job_seeker',
            ],
            [
                'name' => 'mohamed',
                'email' => 'moh@gmail.com',
                'password' => hash::make('00001234'),
                'role' => 'employer',
            ]
        ]);
    }
}
