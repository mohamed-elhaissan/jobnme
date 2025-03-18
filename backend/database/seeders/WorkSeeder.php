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
            [
                'name' => 'Software Engineer',
                'description' => 'Develop software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.',
                'type' => ' Online',
                'category' => 'Software Development',
                'status' => 'Open',
                'location' => 'Agadir',
                'salary' => 10000,
            ],
            [
                'name' => 'Construction Manager',
                'description' => 'Responsible for overseeing and managing construction projects, ensuring that projects are completed on time and within budget.',
                'type' => 'In-Person',
                'category' => 'Construction',
                'status' => 'Open',
                'location' => 'Casablanca',
                'salary' => 15000,
            ],
            [
                'name' => 'Registered Nurse',
                'description' => 'Provides patient care in hospitals, clinics, or other healthcare settings, monitors patient conditions, and administers medications.',
                'type' => 'In-Person',
                'category' => 'Healthcare',
                'status' => 'Open',
                'location' => 'Rabat',
                'salary' => 9500,
            ],
            [
                'name' => 'Hotel Manager',
                'description' => 'Oversees daily operations of a hotel, manages staff, ensures customer satisfaction, and handles administrative tasks.',
                'type' => 'In-Person',
                'category' => 'Hospitality',
                'status' => 'Closed',
                'location' => 'Marrakech',
                'salary' => 12000,
            ],
            [
                'name' => 'High School Teacher',
                'description' => 'Teaches various subjects to high school students, plans lessons, evaluates student performance, and fosters a positive learning environment.',
                'type' => 'In-Person',
                'category' => 'Education',
                'status' => 'Open',
                'location' => 'Tanger',
                'salary' => 8000,
            ],
            [
                'name' => 'Chef de Cuisine',
                'description' => 'Leads kitchen operations, creates menus, manages food preparation, and ensures food quality and safety in restaurants.',
                'type' => 'In-Person',
                'category' => 'Food & Beverage',
                'status' => 'Open',
                'location' => 'Agadir',
                'salary' => 9500,
            ],
            [
                'name' => 'Social Media Manager',
                'description' => 'Manages and grows a company’s social media presence by creating and scheduling content, engaging with followers, and analyzing performance.',
                'type' => 'Remote',
                'category' => 'Marketing',
                'status' => 'Open',
                'location' => 'Fes',
                'salary' => 7000,
            ],
            [
                'name' => 'Logistics Coordinator',
                'description' => 'Manages and coordinates the movement of goods and materials within a supply chain, ensures timely delivery and accurate inventory.',
                'type' => 'In-Person',
                'category' => 'Logistics',
                'status' => 'Open',
                'location' => 'Meknes',
                'salary' => 8500,
            ],
            [
                'name' => 'Financial Analyst',
                'description' => 'Analyzes financial data and provides insights and recommendations to help businesses make informed financial decisions.',
                'type' => 'Remote',
                'category' => 'Finance',
                'status' => 'Closed',
                'location' => 'Casablanca',
                'salary' => 11000,
            ],
            [
                'name' => 'Agricultural Engineer',
                'description' => 'Designs agricultural equipment, processes, and systems to improve the efficiency of farming, including irrigation systems and machinery.',
                'type' => 'In-Person',
                'category' => 'Agriculture',
                'status' => 'Open',
                'location' => 'Kenitra',
                'salary' => 9500,
            ],
            [
                'name' => 'Truck Driver',
                'description' => 'Operates a commercial truck to transport goods across various distances, ensures vehicle maintenance, and adheres to traffic laws.',
                'type' => 'In-Person',
                'category' => 'Transport',
                'status' => 'Open',
                'location' => 'Oujda',
                'salary' => 7500,
            ]
        ]);
    }
}


