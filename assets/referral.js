(function () {
    'use strict';

    var API_BASE = 'https://api.lupibu.com/api/v1';
    var APPSTORE_URL = 'https://apps.apple.com/us/app/lupibu/id6758586869';
    var CLIPBOARD_SENTINEL = 'lupibu_ref:';
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
                return { displayName: (json && json.display_name) || null };
            });
        });
    }

    function copySentinel(slug) {
        var payload = CLIPBOARD_SENTINEL + slug;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(payload).catch(function () {});
        }
        try {
            var ta = document.createElement('textarea');
            ta.value = payload;
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

    function renderReferral(slug, displayName) {
        document.getElementById('r-partner-name').textContent = displayName;
        document.getElementById('r-slug-value').textContent = slug;
        show('r-referral');

        var appBtn = document.getElementById('r-appstore-btn');
        appBtn.addEventListener('click', function () {
            copySentinel(slug).then(function () {
                var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (isiOS) {
                    location.href = APPSTORE_URL;
                } else {
                    window.open(APPSTORE_URL, '_blank', 'noopener,noreferrer');
                }
            });
        });

        var copyBtn = document.getElementById('r-copy-btn');
        copyBtn.addEventListener('click', function () {
            copySentinel(slug).then(flashCopied);
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
                renderReferral(slug, result.displayName);
            })
            .catch(function () {
                show('r-notfound');
            });
    });
})();
