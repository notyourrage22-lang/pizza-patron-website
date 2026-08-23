// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.style.animation = 'pulse 0.3s ease';
});

// Close mobile menu when a link is clicked
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
        });
    });
}

// Order Now Button
function orderNow() {
    window.open('https://order.pizzapatron.com', '_blank');
}

// Get Directions Button
function getDirections() {
    window.open('https://www.google.com/maps/search/Pizza+Patron+Tezel+Culebra/9355+Culebra+Rd+%23103,+San+Antonio,+TX+78251', '_blank');
}

// Contact Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the data to a server
    // For now, we'll show a success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    form.reset();
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to sections
document.querySelectorAll('.menu-item, .review-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Analytics (Optional)
function trackEvent(eventName, eventData) {
    // Log to console for development
    console.log(`Event: ${eventName}`, eventData);
    
    // You can integrate with Google Analytics or other tracking services here
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('button_click', {
            button_text: btn.textContent,
            button_class: btn.className
        });
    });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Responsive menu for mobile
function setupMobileMenu() {
    const width = window.innerWidth;
    if (width <= 768) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

window.addEventListener('resize', setupMobileMenu);
setupMobileMenu();

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        // Scrolling up
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, 100));

console.log('Pizza Patrón website loaded successfully!');