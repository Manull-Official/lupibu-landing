/* ========================================
   LUPIBU HOME — what the pages do, and the sleep calculator of /tools/
   The calculator: a baby's age and wake-up time in, the next sleep out, from the age table the app starts from.
   Computed here in the page: nothing is sent anywhere, no network and no AI call. The home page has no
   calculator; there only the page behaviour at the end of this file runs.
   Copy comes from i18n.js (tool.*); grammar that depends on a number lives in FMT below.
   ======================================== */
(function () {
    'use strict';

    var $ = function (id) { return document.getElementById(id); };
    var hasTool = !!$('tool');

    // Lupibu's age table: backend/data/lupibu_data.xlsx «Sleep Norms» in the app repository, the columns
    // max_age_months, wake_min, wake_max, nap_min, nap_max. A baby takes the first row with age < max_age,
    // exactly as the app does for its first forecast. Regenerate this from the sheet when it changes.
    var NORMS = [[1,45,60,15,240],[2,60,90,20,180],[3,75,90,20,150],[4,90,120,30,120],[5,105,150,30,120],[6,120,180,30,90],[7,140,180,45,120],[8,155,210,45,120],[9,165,210,45,120],[10,165,240,60,120],[12,180,240,60,120],[14,210,300,60,120],[16,210,330,60,120],[18,240,360,60,120],[21,270,360,60,120],[24,300,390,60,120],[30,300,420,60,120]];
    var row = function (age) { for (var i = 0; i < NORMS.length; i++) if (age < NORMS[i][0]) return NORMS[i]; return NORMS[NORMS.length - 1]; };
    // When the night really starts in logged data, in minutes from midnight (the app's audit of 24.09.2026);
    // the sheet's own night_start is earlier than what families do.
    var bedAt = function (age) { return age < 7 ? 1220 : age < 10 ? 1235 : 1230; };

    var NBSP = ' ';
    var two = function (n) { return String(n).padStart(2, '0'); };
    var wrap = function (m) { return ((Math.round(m) % 1440) + 1440) % 1440; };
    var h24 = function (m) { var t = wrap(m); return two(Math.floor(t / 60)) + ':' + two(t % 60); };
    var h12 = function (m) { var t = wrap(m), h = Math.floor(t / 60); return (h % 12 || 12) + ':' + two(t % 60) + NBSP + (h < 12 ? 'AM' : 'PM'); };
    var ruPlural = function (n, one, few, many) { var d = n % 10, h = n % 100; return d === 1 && h !== 11 ? one : d >= 2 && d <= 4 && (h < 12 || h > 14) ? few : many; };
    var parts = function (m) { return { h: Math.floor(m / 60), m: m % 60 }; };
    var range24 = function (a, b) { return h24(a) + '–' + h24(b); };
    // «1 ч 40 мин» from the two unit names of a language
    var span = function (hour, min) { return function (d) { var p = parts(d); return (p.h ? p.h + NBSP + hour : '') + (p.h && p.m ? ' ' : '') + (p.m || !p.h ? p.m + NBSP + min : ''); }; };
    var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

    // Per language: the clock, the window, the age, a length of time and «in 1 h 40 min».
    var FMT = {
        ru: {
            time: h24,
            range: range24,
            hour: two,
            age: function (a) { return a === 0 ? 'до месяца' : a === 12 ? '1 год' : a === 18 ? '1,5 года' : a === 24 ? '2 года' : a + ' ' + ruPlural(a, 'месяц', 'месяца', 'месяцев'); },
            dur: span('ч', 'мин'),
            left: function (d) { return 'через ' + FMT.ru.dur(d); }
        },
        en: {
            time: h12,
            // «12:45–1:30 PM»; both halves of the day are named only when the window crosses noon
            range: function (a, b) { return (wrap(a) < 720) === (wrap(b) < 720) ? h12(a).split(NBSP)[0] + '–' + h12(b) : h12(a) + '–' + h12(b); },
            // the wheel shows «2 : 45 PM»: the half of the day follows the hour she stops on
            hour: function (h) { return String(h % 12 || 12); },
            period: function (h) { return h < 12 ? 'AM' : 'PM'; },
            age: function (a) { return a === 0 ? 'under 1 month' : a === 1 ? '1 month' : a === 12 ? '1 year' : a === 24 ? '2 years' : a + ' months'; },
            dur: span('h', 'min'),
            left: function (d) { return 'in ' + FMT.en.dur(d); }
        },
        kk: {
            time: h24,
            range: range24,
            hour: two,
            age: function (a) { return a === 0 ? '1 айға дейін' : a === 12 ? '1 жас' : a === 18 ? '1,5 жас' : a === 24 ? '2 жас' : a + ' ай'; },
            dur: span('сағ', 'мин'),
            // «кейін» takes the ablative, and the ending sits on the last unit named
            left: function (d) { var p = parts(d); return (p.h && p.m ? p.h + NBSP + 'сағат ' + p.m + NBSP + 'минуттан' : p.m ? p.m + NBSP + 'минуттан' : p.h + NBSP + 'сағаттан') + ' кейін'; }
        }
    };
    var lang = function () { var l = document.documentElement.lang; return FMT[l] ? l : 'ru'; };
    var t = function (key, vars) {
        var s = (translations[lang()] || translations.ru)[key] || '';
        return vars ? s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }) : s;
    };

    var clock = function () { var d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
    // By day the answer is read against the clock, as in the app. From 21:00 to 05:00 the baby sleeps:
    // whatever wake-up she picks then is tomorrow's, so the window is shown as a plan with no «now».
    var byDay = function (c) { return c >= 300 && c < 1260; };
    var still = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var state = {
        age: 4,
        // a likely wake-up: half an hour ago by day, 07:00 for tomorrow when she reads this at night
        wake: (function () { var c = clock(); return byDay(c) && c >= 330 ? Math.floor((c - 30) / 5) * 5 : 420; })()
    };

    function put(el, text, animate) {
        if (el.textContent === text) return;
        el.textContent = text;
        if (!animate) return;
        el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
    }

    function render(animate) {
        var f = FMT[lang()], r = row(state.age), w = state.wake, big = $('nextBig'), c = clock(), live = byDay(c);
        var label = '', text, detail = '', kind = '';
        var soon = function (at) { return live && at > c && at - c <= 360 ? f.left(at - c) : ''; };
        put($('ageText'), f.age(state.age));
        put($('wakeT'), f.time(w));
        $('wakeI').value = h24(w);
        if (w >= 1260 || w < 300) {
            kind = 'long';
            text = t('tool.invalid');
        } else {
            // The night comes next when another nap no longer fits before the usual start of the night.
            var nap = r[0] <= 9 ? r[3] : r[4], night = bedAt(state.age) - w - r[2] < nap;
            if (night) {
                // one time, as the app's «Уложите на ночь / в 20:40»
                var at = Math.round(Math.max(bedAt(state.age), w + r[1]) / 15) * 15;
                label = t('tool.next.night');
                if (live && c >= at) text = t('tool.now');
                else { text = t('tool.at.night', { time: f.time(at) }); detail = soon(at); }
            } else {
                // The app's window: from the shortest wake time for the age to the longest (status.py: sleep_ready_at … sleep_window_end_at).
                var from = Math.round((w + r[1]) / 5) * 5, to = Math.round((w + r[2]) / 5) * 5;
                // After the longest wake time plus the longest nap the app itself takes a sleep as not logged (status.py: unlogged_at).
                var stale = w + r[2] + r[4];
                label = t('tool.next');
                if (!live || c < from) { kind = 'range'; text = t('tool.window', { range: f.range(from, to) }); detail = soon(from); }
                else if (c < to) { text = t('tool.now'); detail = t('tool.until', { time: f.time(to) }); }
                else if (c < stale) { text = t('tool.now'); detail = t('tool.was', { time: f.time(to) }); }
                // awake for longer than a wake window and a nap together: more likely an old wake-up than a baby still up
                else { kind = 'long'; label = ''; text = t('tool.stale', { time: f.dur(c - w) }); detail = t('tool.stale.hint'); }
            }
        }
        big.classList.toggle('long', kind === 'long');
        big.classList.toggle('range', kind === 'range');
        put(big, text, animate);
        put($('nextLabel'), label);
        put($('nextIn'), detail);
    }

    function fillAges() {
        var f = FMT[lang()], sel = $('age');
        sel.textContent = '';
        for (var a = 0; a <= 24; a++) {
            var o = document.createElement('option');
            o.value = a; o.textContent = cap(f.age(a));
            sel.appendChild(o);
        }
        sel.value = state.age;
    }

    // The name is orange wherever the page writes it. The texts arrive from i18n.js as plain strings,
    // so the name is wrapped here, again after every change of language.
    function brand() {
        document.querySelectorAll('.hero .lead, .cmp th span, .steps li').forEach(function (el) {
            if (el.children.length) return;
            var s = el.textContent, i = s.indexOf('Lupibu');
            if (i < 0) return;
            var b = document.createElement('span'), whole = document.createElement('span');
            b.className = 'brand';
            b.textContent = 'Lupibu';
            // one inner element: a step is a flex row, and loose pieces of text would be spread apart by its gap
            whole.append(s.slice(0, i), b, s.slice(i + 6));
            el.textContent = '';
            el.append(whole);
        });
    }

    /* ---------- our own pickers: a sheet with wheels ----------
       The system pickers differ on every browser and are plain on a computer. A finger or a mouse opens this sheet;
       a keyboard and a screen reader keep the native <select> and <input type="time">, which stay in the page
       and stay the single source of the value: a wheel writes into them and sends their own «change». */
    var ROW = 44;

    function setNative(control, value) {
        if (control.value === value) return;
        control.value = value;
        control.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function wheel(items, index, name, onPick) {
        var el = document.createElement('div'), current = -1, frame = 0;
        el.className = 'wheel';
        el.tabIndex = 0;
        el.setAttribute('role', 'listbox');
        el.setAttribute('aria-label', name);
        var clamp = function (i) { return Math.max(0, Math.min(items.length - 1, i)); };
        var go = function (i, smooth) { el.scrollTo({ top: clamp(i) * ROW, behavior: smooth && !still ? 'smooth' : 'auto' }); };
        var mark = function (i) {
            if (i === current) return;
            if (el.children[current]) { el.children[current].classList.remove('on'); el.children[current].setAttribute('aria-selected', 'false'); }
            current = i;
            el.children[i].classList.add('on');
            el.children[i].setAttribute('aria-selected', 'true');
            onPick(i);
        };
        items.forEach(function (text, i) {
            var b = document.createElement('button');
            b.type = 'button';
            b.tabIndex = -1;
            b.textContent = text;
            b.setAttribute('role', 'option');
            b.setAttribute('aria-selected', 'false');
            b.addEventListener('click', function () { if (!el.dragged) go(i, true); });
            el.appendChild(b);
        });
        el.addEventListener('scroll', function () {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(function () { mark(clamp(Math.round(el.scrollTop / ROW))); });
        });
        el.addEventListener('keydown', function (e) {
            var step = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
            if (!step) return;
            e.preventDefault();
            go(current + step, true);
        });
        // A mouse turns the wheel like a drum: press, drag, let go, and it rolls on a little and settles on a row.
        // (A finger already scrolls it natively; a mouse wheel and a click on a row work as well.)
        var drag = null;
        el.addEventListener('pointerdown', function (e) {
            if (e.pointerType !== 'mouse' || e.button !== 0) return;
            drag = { y: e.clientY, top: el.scrollTop, moved: 0, lastY: e.clientY, lastT: e.timeStamp, speed: 0, held: false };
        });
        el.addEventListener('pointermove', function (e) {
            if (!drag) return;
            var dt = e.timeStamp - drag.lastT;
            if (dt > 0) drag.speed = (drag.lastY - e.clientY) / dt;
            drag.lastY = e.clientY;
            drag.lastT = e.timeStamp;
            drag.moved = Math.max(drag.moved, Math.abs(e.clientY - drag.y));
            if (!drag.held) {
                // The wheel takes the pointer only once it really moves: a capture taken on the press
                // would send the click to the wheel instead of the row, and a click on a row would stop working.
                if (drag.moved < 4) return;
                drag.held = true;
                el.setPointerCapture(e.pointerId);
                el.classList.add('dragging');    // no snapping while the hand holds it
            }
            el.scrollTop = drag.top - (e.clientY - drag.y);
        });
        var drop = function (e) {
            if (!drag) return;
            var d = drag, coast = e.timeStamp - d.lastT < 80 ? d.speed * 160 : 0;
            drag = null;
            el.classList.remove('dragging');
            if (!d.held) return;                 // a plain click: the row's own handler takes it
            el.dragged = true;                   // swallow the click that ends a drag
            setTimeout(function () { el.dragged = false; }, 0);
            go(Math.round((el.scrollTop + coast) / ROW), true);
        };
        el.addEventListener('pointerup', drop);
        el.addEventListener('pointercancel', drop);
        // once the sheet is on screen and the wheel has a size
        el.place = function () { el.scrollTop = clamp(index) * ROW; mark(clamp(index)); };
        return el;
    }

    function openSheet(kind) {
        var sheet = $('sheet'), box = $('wheels'), f = FMT[lang()], cols;
        box.textContent = '';
        $('sheet-title').textContent = t(kind === 'age' ? 'tool.age' : 'tool.wake');
        if (kind === 'age') {
            var ages = [];
            for (var a = 0; a <= 24; a++) ages.push(cap(f.age(a)));
            cols = [wheel(ages, state.age, t('tool.age'), function (i) { setNative($('age'), String(i)); })];
            box.appendChild(cols[0]);
        } else {
            // five-minute steps from 05:00 to 20:55, the hours the tool answers for
            var w = Math.max(300, Math.min(1255, Math.round(state.wake / 5) * 5)), hh = Math.floor(w / 60), mm = w % 60;
            var hours = [], mins = [], period = null;
            for (var h = 5; h <= 20; h++) hours.push(f.hour(h));
            for (var m = 0; m < 60; m += 5) mins.push(two(m));
            var apply = function () {
                if (period) period.textContent = f.period(hh);
                setNative($('wakeI'), two(hh) + ':' + two(mm));
            };
            var colon = document.createElement('span');
            colon.className = 'colon';
            colon.textContent = ':';
            colon.setAttribute('aria-hidden', 'true');
            if (f.period) { period = document.createElement('span'); period.className = 'period'; period.textContent = f.period(hh); }
            cols = [
                wheel(hours, hh - 5, t('tool.wake'), function (i) { hh = i + 5; apply(); }),
                wheel(mins, mm / 5, t('tool.wake'), function (i) { mm = i * 5; apply(); })
            ];
            box.append(cols[0], colon, cols[1]);
            if (period) box.appendChild(period);
        }
        $('tool').classList.add('used');     // she has found the controls: the arrows stop signalling
        hold();
        sheet.showModal();
        cols.forEach(function (c) { c.place(); });
    }

    // iOS scrolls the page behind a modal sheet. While the sheet is open the page is pinned where it stands
    // and put back at the same place when the sheet closes.
    var heldAt = 0;
    function hold() {
        var b = document.body.style;
        heldAt = window.scrollY;
        b.position = 'fixed';
        b.top = -heldAt + 'px';
        b.left = '0';
        b.right = '0';
    }
    function release() {
        var b = document.body.style;
        b.position = b.top = b.left = b.right = '';
        window.scrollTo({ top: heldAt, behavior: 'instant' });
    }

    function pickers() {
        var sheet = $('sheet');
        if (!sheet || typeof sheet.showModal !== 'function') return false;
        $('tool').classList.add('enhanced');
        document.querySelectorAll('#tool .field').forEach(function (field, i) {
            field.addEventListener('click', function (e) {
                e.preventDefault();      // the label would hand the tap to the native control
                openSheet(i === 0 ? 'age' : 'wake');
            });
        });
        $('sheetDone').addEventListener('click', function () { sheet.close(); });
        sheet.addEventListener('close', release);
        // The page behind must not move under a finger that lands on the sheet or on the dimmed page around it
        // (iOS scrolls it otherwise); inside a wheel the finger turns the wheel.
        sheet.addEventListener('touchmove', function (e) { if (!e.target.closest('.wheel')) e.preventDefault(); }, { passive: false });
        // a tap on the dimmed page around the sheet closes it; the value is already in place
        sheet.addEventListener('click', function (e) {
            var r = sheet.getBoundingClientRect();
            if (e.target === sheet && (e.clientY < r.top || e.clientY > r.bottom || e.clientX < r.left || e.clientX > r.right)) sheet.close();
        });
        return true;
    }

    // The reviews stay in the language they were written in, whatever the page's own: a screen reader is told which.
    function voices() { var q = $('quotes'); if (q) q.lang = t('rev.lang') || lang(); }

    function start() {
        brand();
        voices();
        if (hasTool) tool();
        page();
    }

    function tool() {
        fillAges();
        render(false);
        $('age').addEventListener('change', function () { state.age = +this.value; $('tool').classList.add('used'); render(true); });
        var wake = $('wakeI');
        wake.addEventListener('change', function () { var p = wake.value.split(':'); if (p.length === 2) { state.wake = +p[0] * 60 + +p[1]; $('tool').classList.add('used'); render(true); } });
        if (!pickers()) {
            // no <dialog>: the native picker, opened by hand where the browser allows it
            wake.addEventListener('click', function () { if (wake.showPicker) { try { wake.showPicker(); } catch (e) { /* the picker opens on its own */ } } });
        }
        setInterval(function () { render(false); }, 60000);

        // i18n.js rewrites every data-i18n text when the language changes; the tool then says its own again.
        new MutationObserver(function () { fillAges(); render(false); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    function page() {
        // i18n.js rewrites every data-i18n text when the language changes: the name is coloured again.
        new MutationObserver(function () { brand(); voices(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

        if (!('IntersectionObserver' in window)) return;

        // The sticky store button (main.js) shows whenever no store badge is on screen: one rule, so it comes once
        // and goes once. It used to step aside for the tool as well, and then it blinked in and out down the page.
        // It hides only at the very end of the page, where it would lie over the footer's last line.
        var last = document.querySelector('.footer-copyright');
        if (last) new IntersectionObserver(function (entries) {
            document.body.classList.toggle('end-on', entries[0].isIntersecting);
        }).observe(last);

        // A little life as she scrolls: the checks of the table tick in one by one, the tool's two rows nod
        // (they are the things to press), the reviews arrive like messages, the phone rises into place.
        // Marked from here, so without scripts, or with reduced motion, everything is simply in its place.
        if (still) return;
        var arrive = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('in');
                arrive.unobserve(entry.target);
            });
        }, { threshold: 0.35 });
        document.querySelectorAll('.cmp, .tool-card, .quotes, .peek').forEach(function (el) { el.classList.add('wait'); arrive.observe(el); });
    }

    // After main.js has applied the language (both wait for DOMContentLoaded, this file loads last).
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
