/* ========================================
   LUPIBU LANDING — INTERACTIVE JS (2026)
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    initI18n();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initStickyCta();
});

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
}

/**
 * Fade-in animations on scroll
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.feature-text, .feature-visual, .download-card'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
}

/**
 * Navbar shadow on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 20);
    }, { passive: true });
}

/**
 * Sticky mobile CTA — appears after scrolling past hero
 */
function initStickyCta() {
    const stickyCta = document.getElementById('stickyCta');
    const hero = document.querySelector('.hero');
    if (!stickyCta || !hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            stickyCta.classList.toggle('visible', !entry.isIntersecting);
        });
    }, { threshold: 0 });

    observer.observe(hero);
}
