<?php

// FILE: order.php

function calculateOrderTotal($items) {
    if (!is_array($items) || empty($items)) {
        throw new InvalidArgumentException("Items must be a non-empty array");
    }

    $total = 0;

    foreach ($items as $item) {
        if (!isset($item["price"]) || $item["price"] < 0) {
            throw new InvalidArgumentException("Invalid item price");
        }

        $total += $item["price"];
    }

    return $total;
}
