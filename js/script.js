// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    mobileMenuBtn.innerHTML = isActive ? '&times;' : '&#9776;';
  });
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Get fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Reset errors
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
    });
    document.getElementById('form-success').style.display = 'none';

    // Validate Name (not empty)
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate Phone (digits only, not empty)
    const phoneRegex = /^\d+$/;
    if (!phoneInput.value.trim()) {
      showError(phoneInput, 'Phone number is required');
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Phone number must contain only digits');
      isValid = false;
    }

    // Validate Message (not empty)
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Message is required');
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission
      document.getElementById('form-success').style.display = 'block';
      contactForm.reset();
    }
  });
}

function showError(inputElement, message) {
  const formGroup = inputElement.closest('.form-group');
  formGroup.classList.add('has-error');
  const errorMsg = formGroup.querySelector('.error-message');
  if (errorMsg) {
    errorMsg.textContent = message;
  }
}
