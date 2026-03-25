document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    // 1. Dark Mode Logic
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(checkbox) checkbox.checked = true;
    }

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // 2. Password Toggle
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});