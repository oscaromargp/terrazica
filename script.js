// ========================================
// TERRAZICA - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initLanguageToggle();
    initIPDetection();
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
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ========================================
// Language Toggle
// ========================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langSwitch = document.getElementById('lang-switch');
    const body = document.body;
    
    langToggle.addEventListener('click', () => {
        toggleLanguage();
    });
    
    langSwitch.addEventListener('click', () => {
        toggleLanguage();
        hideLangBanner();
    });
    
    function toggleLanguage() {
        body.classList.toggle('lang-en');
        
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
// IP Detection
// ========================================
function initIPDetection() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_code;
            if (countryCode && countryCode !== 'MX') {
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
// FAQ Accordions
// ========================================
function initFAQ() {
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
