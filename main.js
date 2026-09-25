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

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const offset = 80;
            const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        });
    });
}

/**
 * Fade-in animations on scroll — gentle entry for narrative rows + slogan.
 * Reduced-motion users get an instant render via the CSS rule in styles.css.
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.moments-header, .moment, .moments-footer, .testimonial, .how-row, .final-cta-section'
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
        threshold: 0.1
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
    // Watch the hero CTA button, not the whole hero: the sticky button should
    // appear the moment the primary button scrolls away, not ~750px later.
    const hero = document.getElementById('heroCta') || document.querySelector('.hero');
    if (!stickyCta || !hero) return;

    // Show the sticky button while neither the hero CTA nor the final CTA is on
    // screen — it duplicates whichever badge the user can already see.
    const finalCta = document.querySelector('.final-cta-section');
    const inView = new Map();
    const update = () => {
        const anyCtaVisible = [...inView.values()].some(Boolean);
        stickyCta.classList.toggle('visible', !anyCtaVisible);
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => inView.set(entry.target, entry.isIntersecting));
        update();
    }, { threshold: 0 });

    observer.observe(hero);
    if (finalCta) observer.observe(finalCta);
}



