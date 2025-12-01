<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../backend/auth.php';

class AuthTest extends TestCase {

    public function testValidLogin() {
        $this->assertTrue(validateLogin("test@example.com", "password123"));
    }

    public function testInvalidEmailThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        validateLogin("wrong-email", "password123");
    }

    public function testShortPasswordThrowsException() {
        $this->expectException(InvalidArgumentException::class);
        validateLogin("test@example.com", "123");
    }
}
