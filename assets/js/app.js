/* Seven Transport app: burger menu, reveal, counters, quote form, cookies, GA gate */
(function () {
  var CFG = window.ST_CONFIG || {};

  document.addEventListener("DOMContentLoaded", function () {
    /* year */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    /* burger + inject language buttons into mobile menu */
    var burger = document.querySelector("[data-burger]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (burger && menu) {
      var mLang = menu.querySelector(".m-lang");
      if (mLang) {
        ["en", "pl", "nl"].forEach(function (l) {
          var b = document.createElement("button");
          b.setAttribute("data-set-lang", l);
          b.textContent = l.toUpperCase();
          mLang.appendChild(b);
        });
        if (window.ST_I18N) window.ST_I18N.apply(window.ST_I18N.lang);
      }
      burger.addEventListener("click", function () { menu.classList.toggle("open"); });
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) menu.classList.remove("open");
      });
    }

    /* scroll reveal */
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealEls = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function (el) { io.observe(el); });
    }

    /* quote form */
    var form = document.querySelector("[data-quote-form]");
    if (form) {
      var status = form.querySelector("[data-form-status]");
      var tKey = function (k, fb) { return window.ST_I18N ? window.ST_I18N.t(k, fb) : fb; };
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;
        var data = new FormData(form);
        data.append("form_type", "quote");
        data.append("subject", "Quote request - seventransport.eu");
        data.append("from_name", "seventransport.eu");

        if (!CFG.web3formsKey) {
          /* no key yet: fall back to a prefilled email draft */
          var body = [];
          data.forEach(function (v, k) { if (k !== "botcheck") body.push(k + ": " + v); });
          location.href = "mailto:" + (CFG.email || "info@seventransport.eu") +
            "?subject=" + encodeURIComponent("Quote request") +
            "&body=" + encodeURIComponent(body.join("\n"));
          return;
        }

        data.append("access_key", CFG.web3formsKey);
        status.className = "form-status";
        status.textContent = tKey("quote.sending", "Sending...");
        fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
          .then(function (r) { return r.json(); })
          .then(function (res) {
            if (res.success) {
              status.className = "form-status ok";
              status.textContent = tKey("quote.ok", "Thank you! We will get back to you the same working day.");
              form.reset();
            } else { throw new Error(); }
          })
          .catch(function () {
            status.className = "form-status err";
            status.textContent = tKey("quote.err", "Sending failed. Please email us: info@seventransport.eu");
          });
      });
    }

    /* cookie consent */
    initCookies();
  });

  function initCookies() {
    var KEY = "st_consent";
    var bar = document.querySelector("[data-cookiebar]");
    if (!bar) return;
    var statsBox = bar.querySelector("[data-ck-stats]");

    function read() {
      try {
        var raw = localStorage.getItem(KEY);
        if (!raw) return null;
        var c = JSON.parse(raw);
        if (!c.ts || Date.now() - c.ts > 365 * 864e5) return null; /* expire after 365 days */
        return c;
      } catch (e) { return null; }
    }
    function save(stats) {
      try { localStorage.setItem(KEY, JSON.stringify({ stats: !!stats, ts: Date.now() })); } catch (e) {}
      bar.classList.remove("show");
      if (stats) loadGA();
    }
    function loadGA() {
      if (!window.ST_CONFIG || !window.ST_CONFIG.gaId || window.__gaLoaded) return;
      window.__gaLoaded = true;
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + window.ST_CONFIG.gaId;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", window.ST_CONFIG.gaId, { anonymize_ip: true });
    }

    var consent = read();
    if (consent) {
      if (consent.stats) loadGA();
    } else {
      /* setTimeout, not rAF: some webviews never fire rAF before paint settles */
      setTimeout(function () { bar.classList.add("show"); }, 60);
    }

    bar.querySelector("[data-ck-accept]").addEventListener("click", function () {
      if (statsBox) statsBox.checked = true;
      save(true);
    });
    bar.querySelector("[data-ck-reject]").addEventListener("click", function () {
      if (statsBox) statsBox.checked = false;
      save(false);
    });
    bar.querySelector("[data-ck-save]").addEventListener("click", function () {
      save(statsBox && statsBox.checked);
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-cookie-open]")) {
        var c = read();
        if (statsBox) statsBox.checked = !!(c && c.stats);
        bar.classList.add("show");
      }
    });
  }
})();
