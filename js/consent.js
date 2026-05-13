// Cookie / data consent banner — Caribbean Gateway
// Self-contained: appends styles + DOM, persists choice in localStorage.
// Choices:
//   - "accepted"  → analytics scripts run
//   - "essential" → analytics blocked, only essential cookies
// Read window.__cgConsent to check status from other scripts.

(function () {
  var KEY = "cg-consent-v1";
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  window.__cgConsent = stored;

  // CSS
  var css = '\
    .cg-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483645;\
      max-width:520px;background:#fbf8f1;color:#0f1f33;\
      border:1px solid rgba(15,31,51,0.18);\
      box-shadow:0 12px 40px rgba(15,31,51,0.18),0 1px 0 rgba(255,255,255,.6) inset;\
      font-family:"Inter Tight",Inter,system-ui,sans-serif;font-size:14px;line-height:1.55;\
      padding:24px 26px;animation:cgIn .35s cubic-bezier(.2,.7,.2,1) both}\
    @keyframes cgIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}\
    .cg-consent__eyebrow{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11px;\
      letter-spacing:.14em;text-transform:uppercase;color:#5e7361;margin-bottom:10px;\
      display:flex;align-items:center;gap:10px}\
    .cg-consent__dot{width:7px;height:7px;border-radius:50%;background:#b8924a}\
    .cg-consent__title{font-family:"Newsreader",Georgia,serif;font-weight:400;font-size:22px;\
      letter-spacing:-0.012em;line-height:1.2;margin:0 0 8px}\
    .cg-consent__title em{font-style:italic;color:#b8924a}\
    .cg-consent__body{margin:0 0 18px;color:#5b6473;font-size:14px;max-width:46ch}\
    .cg-consent__body a{color:#0f1f33;border-bottom:1px solid rgba(15,31,51,0.3);\
      text-decoration:none}\
    .cg-consent__body a:hover{border-bottom-color:#b8924a}\
    .cg-consent__row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\
    .cg-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;\
      font:500 13px/1 "Inter Tight",Inter,sans-serif;letter-spacing:.005em;\
      border-radius:999px;border:1px solid #0f1f33;cursor:pointer;\
      transition:transform .15s ease,background .2s,color .2s;white-space:nowrap}\
    .cg-btn:hover{transform:translateY(-1px)}\
    .cg-btn--solid{background:#0f1f33;color:#f5f1e8}\
    .cg-btn--solid:hover{background:#1a2d44}\
    .cg-btn--ghost{background:transparent;color:#0f1f33}\
    .cg-btn--ghost:hover{background:#0f1f33;color:#f5f1e8}\
    .cg-consent__close{background:none;border:0;cursor:pointer;color:#5e7361;\
      font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.14em;\
      text-transform:uppercase;padding:0;position:absolute;top:18px;right:20px}\
    .cg-consent__close:hover{color:#0f1f33}\
    .cg-pref-link{background:none;border:0;font:inherit;color:#5e7361;cursor:pointer;\
      text-decoration:underline;text-underline-offset:3px;padding:0}\
    .cg-pref-link:hover{color:#0f1f33}\
    @media (max-width:540px){\
      .cg-consent{left:12px;right:12px;bottom:12px;padding:20px}\
      .cg-consent__close{top:14px;right:14px}\
    }';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function loadAnalytics() {
    if (window.__cgAnalyticsLoaded) return;
    window.__cgAnalyticsLoaded = true;
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://cloud.umami.is/script.js";
    s.setAttribute("data-website-id", "82ca98c7-c7ed-4521-89bd-8c661c0a90e1");
    document.head.appendChild(s);
  }

  function setConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    window.__cgConsent = value;
    if (value === "accepted") loadAnalytics();
    var el = document.querySelector(".cg-consent");
    if (el) el.remove();
  }

  function render() {
    var wrap = document.createElement("div");
    wrap.className = "cg-consent";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-label", "Cookie preferences");
    wrap.innerHTML =
      '<button class="cg-consent__close" aria-label="Close">Close ✕</button>' +
      '<div class="cg-consent__eyebrow"><span class="cg-consent__dot"></span>A small note</div>' +
      '<h3 class="cg-consent__title">Cookies, kept <em>simple.</em></h3>' +
      '<p class="cg-consent__body">' +
      'We use a privacy-friendly analytics tool (Umami) to count visits — no ads, no tracking, no data sold. ' +
      'Essential cookies keep the site working. You decide on the rest. ' +
      '<a href="privacy.html">Read the privacy note</a>.' +
      '</p>' +
      '<div class="cg-consent__row">' +
      '<button class="cg-btn cg-btn--solid" data-cg="accept">Accept all</button>' +
      '<button class="cg-btn cg-btn--ghost" data-cg="essential">Essential only</button>' +
      '<button class="cg-pref-link" data-cg="essential" style="margin-left:6px">Decide later</button>' +
      '</div>';

    document.body.appendChild(wrap);

    wrap.querySelector('[data-cg="accept"]').addEventListener("click", function () { setConsent("accepted"); });
    wrap.querySelector('[data-cg="essential"]').addEventListener("click", function () { setConsent("essential"); });
    wrap.querySelectorAll(".cg-pref-link").forEach(function (b) {
      b.addEventListener("click", function () { setConsent("essential"); });
    });
    wrap.querySelector(".cg-consent__close").addEventListener("click", function () {
      // Closing without choosing = essential only
      setConsent("essential");
    });
  }

  // If a choice already exists, honor it on every page load.
  if (stored === "accepted") {
    loadAnalytics();
  } else if (!stored) {
    // Show banner once DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", render);
    } else {
      render();
    }
  }

  // Expose a way to re-open the banner (for "manage cookies" link in the footer)
  window.cgOpenConsent = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    window.__cgConsent = null;
    var existing = document.querySelector(".cg-consent");
    if (existing) existing.remove();
    render();
  };
})();
