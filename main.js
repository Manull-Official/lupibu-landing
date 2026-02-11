/* ========================================
   LUPIBU LANDING - INTERACTIVE JS
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize i18n (language detection + translations)
    initI18n();

    // Screenshot carousel
    initScreenshotCarousel();

    // Smooth scroll for navigation links
    initSmoothScroll();

    // Scroll animations
    initScrollAnimations();

    // Mobile menu toggle
    initMobileMenu();

    // Navbar background on scroll
    initNavbarScroll();

    // Contact form
    initContactForm();
});

/**
 * Screenshot carousel auto-rotation
 */
function initScreenshotCarousel() {
    const screenshots = document.querySelectorAll('.screenshot');
    const dots = document.querySelectorAll('.carousel-dot');

    if (screenshots.length === 0) return;

    let current = 0;
    let interval;

    function showSlide(index) {
        screenshots.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        screenshots[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
    }

    function nextSlide() {
        showSlide((current + 1) % screenshots.length);
    }

    function startAutoplay() {
        interval = setInterval(nextSlide, 3000);
    }

    // Click on dots to navigate
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            showSlide(i);
            startAutoplay();
        });
    });

    // Swipe support
    const carousel = document.querySelector('.phone-screen');
    if (carousel) {
        let startX = 0;
        let startY = 0;
        let distX = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            distX = 0;
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            distX = e.touches[0].clientX - startX;
            const distY = Math.abs(e.touches[0].clientY - startY);
            // Prevent vertical scroll when swiping horizontally
            if (Math.abs(distX) > distY && Math.abs(distX) > 10) {
                e.preventDefault();
            }
        }, { passive: false });

        carousel.addEventListener('touchend', () => {
            const threshold = 50;
            if (Math.abs(distX) > threshold) {
                clearInterval(interval);
                if (distX < 0) {
                    // Swipe left → next
                    showSlide((current + 1) % screenshots.length);
                } else {
                    // Swipe right → prev
                    showSlide((current - 1 + screenshots.length) % screenshots.length);
                }
                startAutoplay();
            }
        }, { passive: true });
    }

    startAutoplay();
}

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Fade-in animations on scroll using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .step, .testimonial-card, .section-header'
    );

    // Add fade-in class to all elements
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animations
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);

                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
    });
}

/**
 * Contact form — opens mailto with pre-filled subject & body
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#contactName').value.trim();
        const email = form.querySelector('#contactEmail').value.trim();
        const message = form.querySelector('#contactMessage').value.trim();

        if (!name || !email || !message) return;

        const subject = encodeURIComponent('Lupibu — message from ' + name);
        const body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n\n' +
            message
        );

        window.location.href = 'mailto:admin@manull.com?subject=' + subject + '&body=' + body;

        // Show success hint
        const lang = localStorage.getItem('lupibu-lang') || 'en';
        const dict = typeof translations !== 'undefined' ? (translations[lang] || {}) : {};
        const successMsg = dict['contact.success'] || 'Your email client will open now. Thank you!';

        const btn = form.querySelector('.contact-submit span');
        if (btn) {
            const original = btn.textContent;
            btn.textContent = successMsg;
            setTimeout(() => { btn.textContent = original; }, 3000);
        }
    });
}

/**
 * Navbar background change on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }, { passive: true });
}
