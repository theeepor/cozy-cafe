// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting Cozy Cafe! We will get back to you soon.');
        this.reset();
      });
    }
  });
  