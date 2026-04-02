/* ========================================
   LUPIBU LANDING — INTERACTIVE JS (2026)
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    initI18n();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initContactForm();
    initStickyCta();
});

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
        '.feature-text, .feature-visual, .step, .section-header, ' +
        '.problem-container, .beta-card, .founder-container, .contact-container'
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
 * Contact form — sends via mailto and shows success
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#contactName').value.trim();
        const contact = form.querySelector('#contactEmail').value.trim();
        const message = form.querySelector('#contactMessage').value.trim();

        if (!name || !contact || !message) return;

        const subject = encodeURIComponent('Lupibu — ' + name);
        const body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Contact: ' + contact + '\n\n' +
            message
        );
        window.location.href = 'mailto:admin@manull.com?subject=' + subject + '&body=' + body;

        form.style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
    });
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
