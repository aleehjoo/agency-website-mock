(function () {
  'use strict';

  // ─── NAV SCROLL STATE ────────────────────────────
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ─── MOBILE MENU ─────────────────────────────────
  const toggle = document.getElementById('nav-mobile-toggle');
  const menu = document.getElementById('nav-mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = toggle.classList.toggle('open');
      menu.classList.toggle('open', open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  // ─── SMOOTH SCROLL ───────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16, behavior: 'smooth' });
      }
    });
  });

  // ─── FAQ ACCORDION ───────────────────────────────
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var ans = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      var open = item.classList.contains('open');
      faqItems.forEach(function (o) {
        if (o !== item) { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; o.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); }
      });
      if (open) { item.classList.remove('open'); ans.style.maxHeight = null; btn.setAttribute('aria-expanded', 'false'); }
      else { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; btn.setAttribute('aria-expanded', 'true'); }
    });
  });

  // ─── FORM ────────────────────────────────────────
  var form = document.getElementById('diagnostic-form');
  var success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = {}; new FormData(form).forEach(function (v, k) { d[k] = v; });
      console.log('Diagnostic form:', d);
      form.style.display = 'none';
      success.classList.add('visible');
    });
  }

  // ─── SCROLL REVEAL ───────────────────────────────
  function initReveals() {
    var selectors = [
      '.hero-headline', '.hero-sub', '.hero-trust', '.hero .btn-primary',
      '.pipeline-wrap',
      '.label', '.heading-2', '.section-sub',
      '.leak-card', '.fix-card',
      '.compare-col', '.process-step',
      '.fit-col', '.faq-item',
      '.cta-heading', '.cta-proof', '.cta-sub', '.cta-form'
    ];
    var els = document.querySelectorAll(selectors.join(','));
    els.forEach(function (el) { el.classList.add('reveal'); });

    // Set stagger indices
    ['.leak-card', '.fix-card', '.compare-col', '.process-step', '.faq-item'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) { el.style.setProperty('--i', i); });
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveals);
  else requestAnimationFrame(initReveals);
})();
