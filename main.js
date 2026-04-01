/* ========================================
   LUPIBU LANDING — INTERACTIVE JS (2026)
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    initI18n();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initBetaForm();
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
        '.problem-container, .beta-card, .founder-container'
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
 * Beta form — sends via mailto and shows success
 */
function initBetaForm() {
    const form = document.getElementById('betaForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#betaName').value.trim();
        const tg = form.querySelector('#betaTelegram').value.trim();

        if (!name || !tg) return;

        // Send email with details
        const subject = encodeURIComponent('Lupibu Beta — ' + name);
        const body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Telegram: ' + tg + '\n\n' +
            'Wants to join the Lupibu beta test.'
        );
        window.location.href = 'mailto:admin@manull.com?subject=' + subject + '&body=' + body;

        // Show success message
        const lang = localStorage.getItem('lupibu-lang') || 'en';
        const dict = typeof translations !== 'undefined' ? (translations[lang] || {}) : {};
        const successText = dict['beta.success'] || 'Thank you! We\'ll reach out on Telegram soon.';

        form.classList.add('success');
        const msg = document.createElement('p');
        msg.className = 'beta-success-msg';
        msg.textContent = successText;
        form.appendChild(msg);
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
