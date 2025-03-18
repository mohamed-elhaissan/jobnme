<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('work')->insert([
            'name' => 'Software Engineer',
            'description' => 'Develop software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.',
            'type' => ' Online',
            'category' => 'Software Development',
            'status' => 'Open',
            'location' => 'Casa Blanca',
            'salary' => 10000,
        ]);
    }
}
