document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('login-signup-form');
    const toggleFormLink = document.getElementById('toggle-form');
    const formHeading = document.getElementById('form-heading');
    const submitBtn = document.getElementById('submit-btn');

    const nameField = document.getElementById('name-field');
    const phoneField = document.getElementById('phone-field');
    const confirmPasswordField = document.getElementById('confirm-password-field');

    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // Switch between Login and Signup Forms
    toggleFormLink.addEventListener('click', function () {
        if (formHeading.textContent === 'Login') {
            formHeading.textContent = 'Sign Up';
            submitBtn.textContent = 'Sign Up';
            nameField.style.display = 'block';
            phoneField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
        } else {
            formHeading.textContent = 'Login';
            submitBtn.textContent = 'Login';
            nameField.style.display = 'none';
            phoneField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
        }
    });

    // Validate Email (checks for valid email format)
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Validate Phone Number (10 digits)
    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    // Validate Password (at least 8 characters and alphanumeric)
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password);
    }

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let isValid = true;

        // Clear previous error messages
        emailError.style.display = 'none';
        phoneError.style.display = 'none';
        passwordError.style.display = 'none';
        confirmPasswordError.style.display = 'none';

        // Validate email
        if (!validateEmail(email)) {
            emailError.textContent = "Invalid email format. Please enter a valid email address (e.g., example@domain.com).";
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validate phone number (only for signup)
        if (formHeading.textContent === 'Sign Up') {
            const phone = document.getElementById('phone').value;
            if (!validatePhone(phone)) {
                phoneError.textContent = "Phone number must be exactly 10 digits.";
                phoneError.style.display = 'block';
                isValid = false;
            }
        }

        // Validate password (must be at least 8 characters and alphanumeric)
        if (!validatePassword(password)) {
            passwordError.textContent = "Password must be at least 8 characters long and include both letters and numbers.";
            passwordError.style.display = 'block';
            isValid = false;
        }

        // If it's a signup, check if passwords match
        if (formHeading.textContent === 'Sign Up') {
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = "Passwords do not match. Please confirm your password.";
                confirmPasswordError.style.display = 'block';
                isValid = false;
            }
        }

        // If form is valid, proceed
        if (isValid) {
            if (formHeading.textContent === 'Sign Up') {
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const confirmPassword = document.getElementById('confirm-password').value;

                // Store user data in localStorage (for demo purposes)
                localStorage.setItem('user', JSON.stringify({ name, email, phone, password }));
                alert('Signed up successfully!');
                window.location.href = 'index.html'; // Redirect to home after signup
            } else {
                const storedUser = JSON.parse(localStorage.getItem('user'));

                if (storedUser && storedUser.email === email && storedUser.password === password) {
                    alert('Logged in successfully!');
                    window.location.href = 'index.html'; // Redirect to home after login
                } else {
                    alert('Invalid credentials');
                }
            }
        }
    });
});
