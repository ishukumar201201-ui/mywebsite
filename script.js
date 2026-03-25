document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE LOGIC (PREMIUM) ---
    // Hum ID 'checkbox' ka use kar rahe hain jo aapke navbar mein hai
    const toggleSwitch = document.querySelector('#checkbox'); 
    const currentTheme = localStorage.getItem('theme');

    // Page load hote hi check karo ki kya dark mode pehle se on tha
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 2. CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = this.querySelector('input[type="text"]');
            const submitBtn = this.querySelector('.submit-btn');
            
            if(!nameInput || !submitBtn) return;

            const name = nameInput.value.trim();
            const originalBtnText = submitBtn.innerText;

            // Button Loading State
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("Dhanyawad " + name + "! Aapki details KHUSHI Construction ko mil gayi hain.");
                this.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // --- 3. PASSWORD EYE ICON (LOGIN PAGE) ---
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            // Password ko dikhana ya chhupana
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Icon badalna (Eye slash se Eye)
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // --- 4. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});