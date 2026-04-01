// ========================================
// TERRAZICA - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initLanguageToggle();
    initIPDetection();
    initAccordions();
    initTestimonialCarousel();
    initParticles();
    initSmoothScroll();
});

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ========================================
// Language Toggle System
// ========================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langSwitch = document.getElementById('lang-switch');
    const body = document.body;
    
    langToggle.addEventListener('click', () => {
        body.classList.toggle('lang-en');
    });
    
    langSwitch.addEventListener('click', () => {
        body.classList.toggle('lang-en');
        hideLangBanner();
    });
}

function showLangBanner() {
    const banner = document.getElementById('lang-banner');
    banner.classList.remove('-translate-y-full');
    banner.classList.add('translate-y-0');
}

function hideLangBanner() {
    const banner = document.getElementById('lang-banner');
    banner.classList.remove('translate-y-0');
    banner.classList.add('-translate-y-full');
}

// ========================================
// IP Detection for Language
// ========================================
function initIPDetection() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_code;
            if (countryCode && countryCode !== 'MX') {
                showLangBanner();
            }
        })
        .catch(() => {});
}

// ========================================
// Accordions (Experiencias & FAQ)
// ========================================
function initAccordions() {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isHidden = content.classList.contains('hidden');
            
            // Close all others in same section
            const parent = toggle.closest('.accordion-item');
            parent.parentElement.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.add('hidden');
            });
            parent.parentElement.querySelectorAll('.accordion-toggle').forEach(t => {
                t.classList.remove('active');
            });
            
            // Toggle current
            if (isHidden) {
                content.classList.remove('hidden');
                toggle.classList.add('active');
            }
        });
    });
    
    // FAQ Accordions
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
}

// ========================================
// Testimonial Carousel
// ========================================
function initTestimonialCarousel() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Auto-play
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Manual controls
    nextBtn.addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        nextSlide();
        autoPlayInterval = setInterval(nextSlide, 5000);
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(autoPlayInterval);
        prevSlide();
        autoPlayInterval = setInterval(nextSlide, 5000);
    });
    
    // Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            currentIndex = index;
            updateCarousel();
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    });
}

// ========================================
// Floating Particles
// ========================================
function initParticles() {
    const containers = document.querySelectorAll('.particles-container');
    
    containers.forEach(container => {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            const size = 2 + Math.random() * 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            container.appendChild(particle);
        }
    });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}
