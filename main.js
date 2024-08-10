document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
    } else {
        errorMessage.textContent = '';
        // Proceed with form submission or further processing
        alert('Account created successfully!');
        // For actual implementation, you would typically send the form data to a server here.
    }
});