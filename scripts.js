document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button click interaction
    document.getElementById('cta-button').addEventListener('click', () => {
        alert('Get Started button clicked!');
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}. Your message has been sent.`);
            // You can add AJAX code here to send the form data to a server
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
