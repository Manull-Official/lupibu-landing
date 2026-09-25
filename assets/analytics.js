/* Landing analytics — PostHog, cookieless.
 *
 * Same project as the app (public client token). Deliberately minimal:
 * memory persistence (no cookies → no consent banner), no autocapture,
 * no session recording. Three events only:
 *   landing_viewed      { lang, path, referrer_domain, utm_* }
 *   store_cta_clicked   { position: hero|sticky|final, lang }
 *   lang_switched       { to, lang }
 */
(function (t, e) {
    if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;

    /* Official PostHog stub (slimmed): queues calls until array.js loads. */
    if (!e.__SV) {
        window.posthog = e;
        e._i = [];
        e.init = function (i, s, a) {
            var p = t.createElement('script');
            p.async = true;
            p.crossOrigin = 'anonymous';
            p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
            var r = t.getElementsByTagName('script')[0];
            r.parentNode.insertBefore(p, r);
            var u = e;
            if (void 0 !== a) u = e[a] = [];
            else a = 'posthog';
            u.people = u.people || [];
            for (
                var o = 'init capture register identify reset opt_in_capturing opt_out_capturing'.split(' '), n = 0;
                n < o.length;
                n++
            )
                (function (m) {
                    u[m] = function () {
                        u.push([m].concat([].slice.call(arguments)));
                    };
                })(o[n]);
            e._i.push([i, s, a]);
        };
        e.__SV = 1;
    }

    posthog.init('phc_2ePXUx2pLUy8Voa5syoapNmzC389MokWxqK55ydSZFL', {
        api_host: 'https://us.i.posthog.com',
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        persistence: 'memory',
    });

    function lang() {
        return document.documentElement.lang || 'en';
    }

    var props = { lang: lang(), path: location.pathname };
    try {
        if (document.referrer) props.referrer_domain = new URL(document.referrer).hostname;
    } catch (_) {}
    try {
        new URLSearchParams(location.search).forEach(function (v, k) {
            if (k.indexOf('utm_') === 0) props[k] = v;
        });
    } catch (_) {}
    posthog.capture('landing_viewed', props);

    document.addEventListener(
        'click',
        function (ev) {
            var a = ev.target.closest && ev.target.closest('a[href*="apps.apple.com"]');
            if (a) {
                var position = a.closest('#stickyCta')
                    ? 'sticky'
                    : a.closest('.final-cta-section')
                      ? 'final'
                      : 'hero';
                posthog.capture('store_cta_clicked', { position: position, lang: lang() });
            }
            var opt = ev.target.closest && ev.target.closest('.lang-option');
            if (opt && opt.dataset.lang) {
                posthog.capture('lang_switched', { to: opt.dataset.lang, lang: lang() });
            }
        },
        true
    );
})(document, window.posthog || []);
