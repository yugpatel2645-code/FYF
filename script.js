<<<<<<< HEAD
// ==========================================================
// script.js
// Global Initialization, Countdown, and Form Validation
// ==========================================================

// 1. Import necessary functions from the cart.js module
// This is critical for the 'Add to Cart' buttons to work and for modularity.
import { addItemToCart, updateCartIconCount } from './cart.js'; 


// --- GLOBAL UTILITY FUNCTIONS (Countdown & Last Updated) ---

// Black Friday Countdown Timer Logic
const eventDate = new Date("2024-12-29T00:00:00").getTime(); 
let countdownInterval; // Declared globally so updateCountdown can clear it.
=======


// Black Friday Countdown Timer
const eventDate = new Date("2024-12-29T00:00:00").getTime();
>>>>>>> origin/master

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

<<<<<<< HEAD
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) {
        clearInterval(countdownInterval); // Stop if element is missing
        return;
    }

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Black Friday Sale is Live!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update countdown display
        countdownElement.textContent = `Black Friday Sale: Time left - ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
// Removed the global setInterval call here! It is now inside DOMContentLoaded.

=======
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');

    

    document.getElementById('countdown').textContent = `Black Friday Sale: Time left - ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = "Black Friday Sale is Live!";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);

// Form Validation
function validateForm() {
    const nameField = document.querySelector('input[placeholder="Enter your name"]');
    const emailField = document.querySelector('input[placeholder="Enter your email"]');
    const messageField = document.querySelector('textarea[placeholder="Write your message"]');

    const name = nameField ? nameField.value.trim() : "";
    const email = emailField ? emailField.value.trim() : "";
    const message = messageField ? messageField.value.trim() : "";

    if (!name) {
        alert("Name is required.");
        return false;
    }
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!message) {
        alert("Message cannot be empty.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
>>>>>>> origin/master

// Dynamically Attach Last Updated Time to Footer
function addLastUpdated() {
    const footer = document.querySelector('footer');
<<<<<<< HEAD
    if (!footer) return;
    
    const lastUpdated = document.createElement('p');
    const now = new Date();

=======
    const lastUpdated = document.createElement('p');
    const now = new Date();

    // Format the date and time
>>>>>>> origin/master
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    lastUpdated.textContent = `Last Updated: ${formattedDate} at ${formattedTime}`;
<<<<<<< HEAD
    lastUpdated.style.cssText = 'margin-top: 10px; font-size: 0.9rem;'; 
=======
    lastUpdated.style.marginTop = '10px';
    lastUpdated.style.fontSize = '0.9rem';
>>>>>>> origin/master

    footer.appendChild(lastUpdated);
}

<<<<<<< HEAD

// --- TESTABLE BUSINESS LOGIC (Validation) ---

/**
 * Validates the User Signup/Login form fields.
 */
export function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    const form = event.target.closest('form');
    if (!form) return false;

    // Helper function to safely get and trim value
    const getVal = (selector) => {
        const field = form.querySelector(selector);
        return field ? field.value.trim() : "";
    };

    const name = getVal('input[placeholder="Enter your name"]');
    const phone = getVal('input[placeholder="Enter your phone number"]');
    const email = getVal('input[placeholder="Enter your email"]');
    const password = getVal('input[placeholder="Enter your password"]');
    const confirmPassword = getVal('input[placeholder="Confirm your password"]');

    let isValid = true; 

    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(function (errorMsg) {
        errorMsg.textContent = "";
    });

    // Validation checks
    if (!name) {
        document.getElementById('name-error').textContent = "Name is required.";
        isValid = false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }
    if (!email || !email.includes("@")) {
        document.getElementById('email-error').textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (!password || password.length < 6) { // Added minimum length for better validation
        document.getElementById('password-error').textContent = "Password is required and must be at least 6 characters.";
        isValid = false;
    }
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = "Please confirm your password.";
        isValid = false;
    }
    if (password && confirmPassword && password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully! (Next step: PHP/MySQL integration)");
        return true;
    } else {
        return false;
    }
}


// --- CART EVENT HANDLER (Modular Logic) ---

/**
 * Attaches 'Add to Cart' listeners to all product buttons on product pages.
 */
function attachProductListeners() {
    // This runs only after the DOM is ready (thanks to DOMContentLoaded below)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const { id, name, price } = e.target.dataset;
            addItemToCart(id, name, price); // Use the imported cart function
        });
    });
}


// --- INITIALIZATION ---

// Initialize all scripts after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    
    // FIX 1: Start the countdown interval here, ensuring the 'countdown' element exists
    updateCountdown(); // Call immediately to avoid 1-second delay
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // 1. Attach form validation 
    const loginSignupForm = document.getElementById('login-signup-form');
    const formToValidate = loginSignupForm || document.querySelector('form'); 

    if (formToValidate) {
        formToValidate.addEventListener('submit', validateForm);
    }

    // 2. Add last updated time to footer
    addLastUpdated();
    
    // 3. Attach product listeners (This should now work reliably!)
   /**
 * Attaches 'Add to Cart' listeners to all product buttons on product pages.
 */
function attachProductListeners() {
    // Check if the required function was imported successfully
    if (typeof addItemToCart !== 'function') {
        console.error("CRITICAL ERROR: Cart logic (addItemToCart) is missing. Check your HTML <script> tags and console for module import errors.");
        return; // Stop execution if the core function is missing
    }

    // Select all buttons with the class 'add-to-cart'
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const { id, name, price } = e.target.dataset;
            addItemToCart(id, name, price); // Use the imported cart function
        });
    });
}

    // 4. Update cart count on page load
    updateCartIconCount();
});
=======
// Initialize all scripts after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Attach form validation
    const submitButton = document.querySelector('button[onclick="validateForm()"]');
    if (submitButton) {
        submitButton.addEventListener('click', validateForm);
    }

    // Add last updated time to footer
    addLastUpdated();
});

>>>>>>> origin/master
