<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../backend/order.php';

class OrderTest extends TestCase {

    public function testOrderTotal() {
        $items = [
            ["price" => 20],
            ["price" => 30]
        ];
        $this->assertEquals(50, calculateOrderTotal($items));
    }

    public function testEmptyItemsArrayThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        calculateOrderTotal([]);
    }

    public function testInvalidPriceThrowsException() {
        $items = [
            ["price" => -10]
        ];
        $this->expectException(InvalidArgumentException::class);
        calculateOrderTotal($items);
    }
}
