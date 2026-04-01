// ========================================
// TERRAZICA - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initLanguageToggle();
    initTranslateDropdown();
    initIPDetection();
    initFAQ();
    initSmoothScroll();
    initGalleryLightbox();
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
// Language Toggle (Manual)
// ========================================
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langSwitch = document.getElementById('lang-switch');
    const body = document.body;
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            toggleLanguage();
        });
    }
    
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            toggleLanguage();
            hideLangBanner();
        });
    }
    
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

// ========================================
// Translate Dropdown
// ========================================
function initTranslateDropdown() {
    const translateBtn = document.getElementById('translate-btn');
    const translateDropdown = document.getElementById('translate-dropdown');
    
    if (translateBtn && translateDropdown) {
        translateBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            translateDropdown.classList.toggle('hidden');
        });
        
        document.addEventListener('click', () => {
            translateDropdown.classList.add('hidden');
        });
        
        translateDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
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

// ========================================
// Gallery Lightbox
// ========================================
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
        src: item.src,
        caption: item.dataset.caption
    }));
    
    if (!lightbox || images.length === 0) return;
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    });
    
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].caption;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].caption;
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].caption;
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('flex')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        }
    });
}
