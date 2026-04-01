// ========================================
// TERRAZICA - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initNavbar();
    initMobileMenu();
    initLanguageToggle();
    initIPDetection();
    initScrollAnimations();
    initParticles();
    initFAQ();
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
    
    // Close menu when clicking links
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
    
    // Toggle button in navbar
    langToggle.addEventListener('click', () => {
        toggleLanguage();
    });
    
    // Switch button in banner
    langSwitch.addEventListener('click', () => {
        toggleLanguage();
        hideLangBanner();
    });
    
    function toggleLanguage() {
        body.classList.toggle('lang-en');
        
        // Update language button text
        const currentLang = body.classList.contains('lang-en') ? 'en' : 'es';
        updateLangButton(currentLang);
    }
    
    function updateLangButton(lang) {
        const flag = lang === 'en' ? '🇺🇸' : '🇲🇽';
        const text = lang === 'en' ? 'ENG' : 'ESP';
        langToggle.innerHTML = `
            <span class="text-xl">${flag}</span>
            <span class="text-sm">${text}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
        `;
    }
}

// ========================================
// IP Detection for Language
// ========================================
function initIPDetection() {
    // Check if user is outside Mexico
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_code;
            
            // If user is not from Mexico, show language banner
            if (countryCode && countryCode !== 'MX') {
                showLangBanner();
            }
        })
        .catch(() => {
            // Silently fail - don't show banner if detection fails
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
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate counters if present
                if (entry.target.querySelector('.counter')) {
                    animateCounters(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-reveal');
        observer.observe(section);
    });
}

// ========================================
// Counter Animation
// ========================================
function animateCounters(container) {
    const counters = container.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ========================================
// Floating Particles
// ========================================
function initParticles() {
    const containers = document.querySelectorAll('.particles-container');
    
    containers.forEach(container => {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay and duration
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            
            // Random size
            const size = 2 + Math.random() * 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random opacity
            particle.style.opacity = 0.2 + Math.random() * 0.4;
            
            container.appendChild(particle);
        }
    });
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isHidden = content.classList.contains('hidden');
            
            // Close all others
            document.querySelectorAll('.faq-content').forEach(c => {
                c.classList.add('hidden');
            });
            document.querySelectorAll('.faq-toggle').forEach(t => {
                t.classList.remove('active');
            });
            
            // Toggle current
            if (isHidden) {
                content.classList.remove('hidden');
                toggle.classList.add('active');
            }
        });
    });
}

// ========================================
// Smooth Scroll for Anchor Links
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
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========================================
// Lazy Loading Images
// ========================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Utility: Debounce
// ========================================
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

// ========================================
// Utility: Throttle
// ========================================
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavbar,
        initMobileMenu,
        initLanguageToggle,
        initScrollAnimations,
        initParticles,
        initFAQ,
        initSmoothScroll
    };
}
