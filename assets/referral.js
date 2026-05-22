(function () {
    'use strict';

    var API_BASE = 'https://api.lupibu.com/api/v1';
    var APPSTORE_APP_ID = '6758586869';
    var APPSTORE_URL = 'https://apps.apple.com/us/app/lupibu/id' + APPSTORE_APP_ID;
    var SLUG_RE = /^[a-z0-9_]{1,64}$/;
    var REFERRAL_PATH_RE = /^\/r\/([^\/?#]+)\/?$/;

    function show(id) {
        ['r-loading', 'r-referral', 'r-notfound'].forEach(function (sectionId) {
            var el = document.getElementById(sectionId);
            if (!el) return;
            el.hidden = sectionId !== id;
        });
    }

    function parseSlugFromPath() {
        var match = REFERRAL_PATH_RE.exec(location.pathname);
        if (!match) return null;
        var raw = decodeURIComponent(match[1]).toLowerCase();
        return SLUG_RE.test(raw) ? raw : null;
    }

    function validateSlug(slug) {
        return fetch(
            API_BASE + '/referrals/validate?slug=' + encodeURIComponent(slug),
            { method: 'GET', headers: { 'Accept': 'application/json' } }
        ).then(function (resp) {
            if (resp.status === 404) return null;
            if (!resp.ok) throw new Error('http_' + resp.status);
            return resp.json().then(function (json) {
                if (!json) return null;
                return {
                    displayName: json.display_name || null,
                    offerCode: json.offer_code || null,
                };
            });
        });
    }

    // Resolve the Apple Offer Code to embed in the redeem URL. Prefer
    // the partner-specific code returned by the API; fall back to the
    // slug uppercased for partners that haven't been assigned a code
    // yet (e.g. brand-new bloggers still being onboarded). The fallback
    // makes the page render gracefully even if the partner row is half-
    // configured — the deep link may not redeem on Apple's side, but the
    // page won't break.
    function resolveOfferCode(slug, apiOfferCode) {
        if (apiOfferCode) return apiOfferCode.toUpperCase();
        return slug.toUpperCase();
    }

    function buildRedeemUrl(code) {
        return 'https://apps.apple.com/redeem?ctx=offercodes&id='
            + APPSTORE_APP_ID + '&code=' + encodeURIComponent(code);
    }

    function copyCode(code) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(code).catch(function () {});
        }
        try {
            var ta = document.createElement('textarea');
            ta.value = code;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        } catch (_) {}
        return Promise.resolve();
    }

    function flashCopied() {
        var btn = document.getElementById('r-copy-btn');
        if (!btn) return;
        btn.classList.add('copied');
        var icon = document.getElementById('r-copy-icon');
        if (icon) icon.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
        setTimeout(function () {
            btn.classList.remove('copied');
            if (icon) {
                icon.innerHTML =
                    '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
                    '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>';
            }
        }, 1800);
    }

    function renderReferral(slug, displayName, apiOfferCode) {
        var code = resolveOfferCode(slug, apiOfferCode);

        document.getElementById('r-partner-name').textContent = displayName;
        document.getElementById('r-slug-value').textContent = code;
        show('r-referral');

        // Primary CTA — open Apple's native redeem sheet with the code
        // pre-filled. On iOS this triggers StoreKit's offer-code UI in
        // one tap; on other platforms Apple shows a fallback page.
        var appBtn = document.getElementById('r-appstore-btn');
        appBtn.addEventListener('click', function () {
            var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            var redeemUrl = buildRedeemUrl(code);
            if (isiOS) {
                location.href = redeemUrl;
            } else {
                // Non-iOS: redeem URL won't work — fall back to the App
                // Store listing so the user can install on their phone
                // later and redeem there.
                window.open(APPSTORE_URL, '_blank', 'noopener,noreferrer');
            }
        });

        // Copy the actual offer code so the user can paste it into the
        // App Store redeem sheet manually if the deep link doesn't fire.
        var copyBtn = document.getElementById('r-copy-btn');
        copyBtn.addEventListener('click', function () {
            copyCode(code).then(flashCopied);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var slug = parseSlugFromPath();
        if (!slug) {
            show('r-notfound');
            return;
        }

        validateSlug(slug)
            .then(function (result) {
                if (!result || !result.displayName) {
                    show('r-notfound');
                    return;
                }
                renderReferral(slug, result.displayName, result.offerCode);
            })
            .catch(function () {
                show('r-notfound');
            });
    });
})();
