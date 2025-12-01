<?php

// FILE: db.php
// Fake Database Connection (Good for CI/CD & Unit Testing)

function connectDB() {
    // Fake in-memory database
    return [
        "users" => [
            ["email" => "test@example.com", "password" => "password123"]
        ],
        "products" => [
            1 => ["name" => "Shirt", "price" => 20],
            2 => ["name" => "Jeans", "price" => 40]
        ]
    ];
}
