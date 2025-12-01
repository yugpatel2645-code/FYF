document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('login-signup-form');
    const toggleFormLink = document.getElementById('toggle-form');
<<<<<<< HEAD
    let formHeading = document.getElementById('form-heading'); // Use let or ensure it is the form h2

    // If the h2 is outside the form, fetch the form box h2
    if (!formHeading || formHeading.tagName !== 'H2') {
         formHeading = form.closest('.form-box').querySelector('h2');
    }

=======
    const formHeading = document.getElementById('form-heading');
>>>>>>> origin/master
    const submitBtn = document.getElementById('submit-btn');

    const nameField = document.getElementById('name-field');
    const phoneField = document.getElementById('phone-field');
    const confirmPasswordField = document.getElementById('confirm-password-field');

    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

<<<<<<< HEAD
    // Function to re-attach toggle listener
    function attachToggleListener() {
        const currentToggleLink = document.getElementById('toggle-form');
        if (currentToggleLink) {
             // Use a local function to prevent arguments.callee deprecation warnings
            currentToggleLink.addEventListener('click', toggleFormView);
        }
    }

    // Switch between Login and Signup Forms
    function toggleFormView() {
        if (formHeading.textContent.trim() === 'Login') {
=======
    // Switch between Login and Signup Forms
    toggleFormLink.addEventListener('click', function () {
        if (formHeading.textContent === 'Login') {
>>>>>>> origin/master
            formHeading.textContent = 'Sign Up';
            submitBtn.textContent = 'Sign Up';
            nameField.style.display = 'block';
            phoneField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
<<<<<<< HEAD
            form.action = "signup-user.php"; // Set action for signup
            document.getElementById('toggle-link').innerHTML = 'Already have an account? <a href="javascript:void(0)" id="toggle-form">Log In</a>';
=======
>>>>>>> origin/master
        } else {
            formHeading.textContent = 'Login';
            submitBtn.textContent = 'Login';
            nameField.style.display = 'none';
            phoneField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
<<<<<<< HEAD
            form.action = "login-user.php"; // Set action for login
            document.getElementById('toggle-link').innerHTML = 'Don\'t have an account? <a href="javascript:void(0)" id="toggle-form">Sign Up</a>';
        }
        // Re-attach listener after inner HTML change
        attachToggleListener(); 
    }

    if (toggleFormLink) {
        // Initial setup for the listener
        toggleFormLink.addEventListener('click', toggleFormView);
    }
    
    // Validation functions (as provided in original file)
=======
        }
    });

    // Validate Email (checks for valid email format)
>>>>>>> origin/master
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
<<<<<<< HEAD
=======

    // Validate Phone Number (10 digits)
>>>>>>> origin/master
    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }
<<<<<<< HEAD
    function validatePassword(password) {
        // Updated regex for better client-side check
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        return passwordPattern.test(password);
    }

    // Handle form submission (Client-Side Validation only)
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Temporarily prevent submission
=======

    // Validate Password (at least 8 characters and alphanumeric)
    function validatePassword(password) {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password);
    }

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
>>>>>>> origin/master

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let isValid = true;

        // Clear previous error messages
<<<<<<< HEAD
        document.querySelectorAll('.error-message').forEach(err => err.textContent = "");

        // Run client-side validation...
        if (!validateEmail(email)) {
            emailError.textContent = "Invalid email format. Please enter a valid email address (e.g., example@domain.com).";
            isValid = false;
        }

        if (formHeading.textContent.trim() === 'Sign Up') {
            const phone = document.getElementById('phone').value;
            if (!validatePhone(phone)) {
                phoneError.textContent = "Phone number must be exactly 10 digits.";
=======
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
>>>>>>> origin/master
                isValid = false;
            }
        }

<<<<<<< HEAD
        if (!validatePassword(password)) {
            passwordError.textContent = "Password must be at least 8 characters long and include both letters and numbers.";
            isValid = false;
        }

        if (formHeading.textContent.trim() === 'Sign Up') {
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = "Passwords do not match. Please confirm your password.";
=======
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
>>>>>>> origin/master
                isValid = false;
            }
        }

<<<<<<< HEAD
        // If client-side validation passes, allow the form to submit to PHP
        if (isValid) {
            form.submit(); // Manually submit the form to the PHP script
        }
    });
});
=======
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
>>>>>>> origin/master
