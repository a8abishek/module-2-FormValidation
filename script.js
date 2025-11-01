// Selecting the Elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const checkbox = document.getElementById("termsCheck");

//validation ONLY when form is submitted;
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop auto reload
    formValidate();
});

// Function for that formvalidation
function formValidate() {
    let isValid = true;

    // Name 
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required", "nameError");
        isValid = false;
    } else {
        showSuccess(nameInput, "nameError");
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required", "emailError");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Enter a valid Email", "emailError");
        isValid = false;
    } else {
        showSuccess(emailInput, "emailError");
    }

    // Password 
    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Password is required", "passwordError");
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, "Password must be at least 8 characters", "passwordError");
        isValid = false;
    } else {
        showSuccess(passwordInput, "passwordError");
    }

    // Confirm password
    if (confirmPasswordInput.value.trim() === "") {
        showError(confirmPasswordInput, "Confirm your password", "confirmPasswordError");
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match", "confirmPasswordError");
        isValid = false;
    } else {
        showSuccess(confirmPasswordInput, "confirmPasswordError");
    }

    // Checkbox 
    if (!checkbox.checked) {
        document.getElementById("termsError").textContent = "You must agree before signing up";
        isValid = false;
    } else {
        document.getElementById("termsError").textContent = "";
    }

    if (isValid) {
        alert(" Sign Up Successful!");
        form.reset();
    }
}
function showError(input, message, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    input.classList.add("error");
    input.classList.remove("success");
}

function showSuccess(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = "";
    input.classList.add("success");
    input.classList.remove("error");
}
