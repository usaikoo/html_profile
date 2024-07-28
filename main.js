const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

themeSwitcher.addEventListener('click', () => {
    if (root.style.getPropertyValue('--background-color') === '#f9f9f9') {
        root.style.setProperty('--background-color', '#333');
        root.style.setProperty('--primary-color', '#fff');
        themeSwitcher.textContent = 'Light Mode';
    } else {
        root.style.setProperty('--background-color', '#f9f9f9');
        root.style.setProperty('--primary-color', '#333');
        themeSwitcher.textContent = 'Dark Mode';
    }
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate fields
    let valid = true;

    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block'; // Show error message
        valid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        emailError.style.display = 'block';
        valid = false;
    }

    if (message === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Message sent successfully!');
        contactForm.reset(); // Reset form fields
    }
});


//nav bar mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle the hamburger icon
    navLinks.classList.toggle('active'); // Toggle the mobile menu
});