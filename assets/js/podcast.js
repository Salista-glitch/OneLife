(function(){
    "use strict";

     // Newsletter Form Submission
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Simulate form submission
    alert(`Thank you for subscribing! We'll send meaningful stories to ${email}`);
    this.reset();
});

// Engagement Form Submission
document.querySelector('.engagement-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    // Simulate form submission
    alert(`Welcome to the community, ${name}! We're excited to share stories with you.`);
    this.reset();
});

// Smooth scroll for CTA buttons
document.querySelectorAll('.cta-button, .secondary-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Only prevent default if it's a navigation button
        if (this.textContent === 'Explore Stories') {
            e.preventDefault();
            document.querySelector('.featured-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else if (this.textContent === 'Join the Conversation') {
            e.preventDefault();
            document.querySelector('.join-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// Testimonial Dots Navigation (Simple Implementation)
document.querySelectorAll('.testimonial-dots .dot').forEach((dot, index) => {
    dot.addEventListener('click', function() {
        // Remove active class from all dots
        document.querySelectorAll('.testimonial-dots .dot').forEach(d => {
            d.classList.remove('active');
        });
        
        // Add active class to clicked dot
        this.classList.add('active');
        
        // In a real implementation, this would change the visible testimonials
        console.log(`Showing testimonial set ${index + 1}`);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('.story-card, .storyteller-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect sound feedback (optional - commented out by default)
/*
document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Could add subtle audio feedback here
        console.log('Card hover');
    });
}); */
})();