// ========================================
// TERRAZICA - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initLanguageToggle();
    initIPDetection();
    initAccordions();
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
// Language Toggle System - Fixed
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
        
        // Update toggle button appearance
        const flag = body.classList.contains('lang-en') ? '🇺🇸' : '🇲🇽';
        const text = body.classList.contains('lang-en') ? 'ENG' : 'ESP';
        
        const toggleFlag = langToggle.querySelector('.lang-toggle-flag');
        const toggleText = langToggle.querySelector('.lang-toggle-text');
        
        if (toggleFlag) toggleFlag.textContent = flag;
        if (toggleText) toggleText.textContent = text;
    }
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
                // If not from Mexico, switch to English
                document.body.classList.add('lang-en');
                updateToggleButton('en');
                showLangBanner();
            }
        })
        .catch(() => {});
}

function updateToggleButton(lang) {
    const langToggle = document.getElementById('lang-toggle');
    const toggleFlag = langToggle.querySelector('.lang-toggle-flag');
    const toggleText = langToggle.querySelector('.lang-toggle-text');
    
    if (lang === 'en') {
        if (toggleFlag) toggleFlag.textContent = '🇺🇸';
        if (toggleText) toggleText.textContent = 'ENG';
    } else {
        if (toggleFlag) toggleFlag.textContent = '🇲🇽';
        if (toggleText) toggleText.textContent = 'ESP';
    }
}

// ========================================
// Accordions (Experiencias & FAQ)
// ========================================
function initAccordions() {
    // Experiencias accordion
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isHidden = content.classList.contains('hidden');
            
            // Close all others in same section
            const parent = toggle.closest('.accordion-item');
            if (parent && parent.parentElement) {
                parent.parentElement.querySelectorAll('.accordion-content').forEach(c => {
                    c.classList.add('hidden');
                });
                parent.parentElement.querySelectorAll('.accordion-toggle').forEach(t => {
                    t.classList.remove('active');
                });
            }
            
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
            toggle.classList.toggle('active');
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
