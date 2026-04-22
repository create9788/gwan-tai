/**
 * 廣太塑膠 - Component Loader
 * Fetches header/footer partials and loads JS dependencies.
 * PHP backend should replace with: <?php include 'inc/partials/header.php'; ?>
 */
(function () {
    'use strict';

    function loadScript(src) {
        return new Promise(function (resolve) {
            var s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = resolve;
            document.body.appendChild(s);
        });
    }

    function setActiveMenu() {
        var current = window.location.pathname.split('/').pop();
        if (!current || current === '') current = 'index.html';

        // Remove existing active states
        document.querySelectorAll('.navigation-menu .menu-item').forEach(function (li) {
            li.classList.remove('current-menu-item');
        });

        // Set active based on current URL
        document.querySelectorAll('.navigation-menu a').forEach(function (a) {
            var href = (a.getAttribute('href') || '').split('/').pop();
            if (href && href === current) {
                var li = a.closest('.menu-item');
                if (li) li.classList.add('current-menu-item');
            }
        });

        // Special: service/process both highlight 服務項目
        if (current === 'process.html') {
            document.querySelectorAll('.navigation-menu .menu-item a').forEach(function (a) {
                if (a.getAttribute('href') === 'service.html') {
                    var li = a.closest('.menu-item');
                    if (li) li.classList.add('current-menu-item');
                }
            });
        }

        // Special: product-detail highlights product
        if (current === 'product-detail.html') {
            document.querySelectorAll('.navigation-menu .menu-item a').forEach(function (a) {
                if (a.getAttribute('href') === 'product.html') {
                    var li = a.closest('.menu-item');
                    if (li) li.classList.add('current-menu-item');
                }
            });
        }

        // Special: news-detail highlights news
        if (current === 'news-detail.html') {
            document.querySelectorAll('.navigation-menu .menu-item a').forEach(function (a) {
                if (a.getAttribute('href') === 'news.html') {
                    var li = a.closest('.menu-item');
                    if (li) li.classList.add('current-menu-item');
                }
            });
        }
    }

    /**
     * Remove scripts injected by dev tools (e.g. Live Server hot-reload).
     * Safe no-op in production where no such scripts exist.
     */
    function stripDevInjection(html) {
        // Live Server injects: <!-- Code injected by live-server --><script ...></script>
        return html.replace(/<!--\s*Code injected by live-server\s*-->[\s\S]*?<\/script>/gi, '');
    }

    function fetchHTML(url) {
        return fetch(url).then(function (r) {
            if (!r.ok) throw new Error('Failed: ' + url);
            return r.text();
        }).then(function (html) {
            return stripDevInjection(html);
        });
    }

    function injectHTML(id, html) {
        var el = document.getElementById(id);
        if (!el) return;
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var frag = document.createDocumentFragment();
        while (tmp.firstChild) frag.appendChild(tmp.firstChild);
        el.parentNode.replaceChild(frag, el);
    }

    var base = 'inc/';

    Promise.all([
        fetchHTML(base + 'partials/header.html'),
        fetchHTML(base + 'partials/footer.html')
    ]).then(function (results) {
        injectHTML('header-placeholder', results[0]);
        injectHTML('footer-placeholder', results[1]);
        setActiveMenu();
    }).then(function () {
        return loadScript(base + 'assets/js/swiper-bundle.min.js');
    }).then(function () {
        return loadScript(base + 'assets/js/wow.min.js');
    }).then(function () {
        return loadScript(base + 'assets/dist/app.js');
    }).catch(function (err) {
        console.warn('[components.js] Error:', err);
        // Fallback: load scripts even if partials fail
        loadScript(base + 'assets/js/swiper-bundle.min.js')
            .then(function () { return loadScript(base + 'assets/js/wow.min.js'); })
            .then(function () { return loadScript(base + 'assets/dist/app.js'); });
    });

})();
