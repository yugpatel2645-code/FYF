<?php

// FILE: auth.php

function validateLogin($email, $password) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new InvalidArgumentException("Invalid email format");
    }
    if (strlen($password) < 6) {
        throw new InvalidArgumentException("Password too short");
    }

    // Fake authentication logic for assignment
    if ($email === "test@example.com" && $password === "password123") {
        return true;
    }

    return false;
}
