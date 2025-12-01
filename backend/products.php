<?php

// FILE: products.php

function calculateDiscountedPrice($price, $discountPercentage) {
    if ($price < 0 || $discountPercentage < 0 || $discountPercentage > 100) {
        throw new InvalidArgumentException("Invalid price or discount");
    }

    return $price - ($price * ($discountPercentage / 100));
}

function getProductById($id) {
    $products = [
        1 => ["name" => "Shirt", "price" => 20],
        2 => ["name" => "Jeans", "price" => 40]
    ];

    return $products[$id] ?? null;
}
