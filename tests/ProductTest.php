<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../backend/products.php';

class ProductTest extends TestCase {

    public function testDiscountCalculation() {
        $result = calculateDiscountedPrice(100, 10);
        $this->assertEquals(90, $result);
    }

    public function testInvalidDiscountThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        calculateDiscountedPrice(-10, 20);
    }

    public function testGetProductById() {
        $product = getProductById(1);
        $this->assertEquals("Shirt", $product["name"]);
    }

    public function testGetNonExistingProductReturnsNull() {
        $this->assertNull(getProductById(999));
    }
}
