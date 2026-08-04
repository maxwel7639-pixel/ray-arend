/* Ray Arend — interações do site
   1) reveal ao rolar   2) tilt suave nos cards (só no desktop, com ponteiro fino) */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal ao rolar ---------- */
  var revealables = document.querySelectorAll('[data-reveal]');

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Tilt nos cards ---------- */
  var TILT = 5; // graus, igual ao padrão do design
  var mqMobile = window.matchMedia('(max-width: 760px)');
  var last = null;

  function resetTilt() {
    if (!last) return;
    last.style.transform = '';
    last = null;
  }

  function onMove(ev) {
    if (reduced || mqMobile.matches || ev.pointerType === 'touch') return resetTilt();

    var card = ev.target && ev.target.closest ? ev.target.closest('[data-tilt]') : null;
    if (!card) return resetTilt();
    if (last && last !== card) resetTilt();
    last = card;

    var r = card.getBoundingClientRect();
    var x = (ev.clientX - r.left) / r.width - 0.5;
    var y = (ev.clientY - r.top) / r.height - 0.5;
    var m = TILT * 2;

    card.style.transform =
      'perspective(1000px) rotateY(' + (x * m).toFixed(2) + 'deg) rotateX(' +
      (-y * m).toFixed(2) + 'deg) translateY(-4px)';
  }

  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', resetTilt);
  mqMobile.addEventListener('change', resetTilt);

  /* ---------- FAQ: só um aberto por vez ----------
     Navegador novo já faz isso sozinho com <details name="faq">.
     Este fallback cobre os que ainda não suportam o atributo. */
  var supportsName = 'name' in document.createElement('details');

  if (!supportsName) {
    var faq = document.querySelectorAll('.faq-item');
    faq.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        faq.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }
})();
