/* Landing analytics — PostHog, cookieless.
 *
 * Same project as the app (public client token). Deliberately minimal:
 * memory persistence (no cookies → no consent banner), no autocapture,
 * no session recording. Five events only:
 *   landing_viewed      { lang, path, referrer_domain }
 *   landing_screen_seen { screen: compare|reviews|start on the home page, tool on /tools/; lang } once a visit per screen,
 *                       when its heading comes into view: it shows where on the page a visit ends
 *   store_cta_clicked   { position: hero|sticky|final, lang }
 *   lang_switched       { to, lang }
 *   tool_used           { lang } once a visit, when she changes the age or the
 *                       wake-up time. The values she enters never leave the page.
 * Every event of a visit carries the utm_* of the link that brought her, so an ad is judged
 * by the taps on the store button it led to, not only by the views.
 */
/* App Store campaign links.
 * Apple counts a download for a campaign only when the link carries the developer's provider token (pt) and a
 * campaign name (ct); the numbers then show in App Store Connect → Analytics → Acquisition → Campaigns
 * (a campaign appears there after 5 downloads).
 * PT is the number from «Generate Campaign Link» on that page (given by the owner on 10.11.2026). With it empty the store links stay as they are.
 * ct is the utm_source of the visit (an ad puts it into its address), or «site» for a visit without one.
 */
var LUPIBU_PT = '128285381';
(function () {
    if (!LUPIBU_PT) return;
    var ct = 'site';
    try {
        ct = (new URLSearchParams(location.search).get('utm_source') || 'site').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40) || 'site';
    } catch (_) {}
    document.querySelectorAll('a[href*="apps.apple.com/app/"]').forEach(function (a) {
        a.href = 'https://apps.apple.com/app/apple-store/id6758586869?pt=' + LUPIBU_PT + '&ct=' + ct + '&mt=8';
    });
})();

(function (t, e) {
    // Not on a developer's machine: by name, or by its address on the home network (a phone opening the local preview).
    if (/^(localhost|127\.0\.0\.1|10(\.\d+){3}|192\.168(\.\d+){2}|172\.(1[6-9]|2\d|3[01])(\.\d+){2})$/.test(location.hostname)) return;

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
    var utm = {};
    try {
        new URLSearchParams(location.search).forEach(function (v, k) {
            if (k.indexOf('utm_') === 0) utm[k] = v;
        });
    } catch (_) {}
    posthog.register(utm);
    posthog.capture('landing_viewed', props);

    // Where on the page a visit ends: each screen counts once, when its heading comes into view.
    if ('IntersectionObserver' in window) {
        var seen = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    seen.unobserve(entry.target);
                    posthog.capture('landing_screen_seen', { screen: entry.target.getAttribute('data-screen'), lang: lang() });
                });
            },
            { threshold: 0.5 }
        );
        document.querySelectorAll('[data-screen]').forEach(function (el) {
            seen.observe(el);
        });
    }

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

    var toolUsed = false;
    document.addEventListener(
        'change',
        function (ev) {
            if (toolUsed || !ev.target.closest || !ev.target.closest('#tool')) return;
            toolUsed = true;
            posthog.capture('tool_used', { lang: lang() });
        },
        true
    );
})(document, window.posthog || []);
