// ============================================================
//  LINKS DE CHECKOUT — substitua com seus links reais
// ============================================================
const CHECKOUT_URLS = {
  basico:                'https://pay.wiapy.com/N5lkriRkVW',
  premium:               'https://pay.wiapy.com/UbW9C4H8ph',
  premiumDescontoExit:   'https://wiapy.com/SEU-LINK-PREMIUM-1490',
  premiumDescontoBasico: 'https://pay.wiapy.com/xTaZZR_vBb'
};

// ============================================================
//  FAQ ACCORDION — uma pergunta aberta por vez
// ============================================================
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn    = item.querySelector('.faq-item__btn');
    const answer = item.querySelector('.faq-item__answer');

    btn.addEventListener('click', () => {
      const isOpen = !answer.hidden;

      items.forEach(i => {
        i.querySelector('.faq-item__answer').hidden = true;
        i.querySelector('.faq-item__btn').setAttribute('aria-expanded', 'false');
        i.classList.remove('faq-item--open');
      });

      if (!isOpen) {
        answer.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('faq-item--open');
      }
    });
  });
}

// ============================================================
//  SMOOTH SCROLL — CTAs com .cta-smooth → #planos
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('.cta-smooth').forEach(el => {
    el.addEventListener('click', e => {
      const href = el.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================================
//  POPUP HELPERS
// ============================================================
function openPopup(popup) {
  popup.setAttribute('aria-hidden', 'false');
  popup.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

function closePopup(popup) {
  popup.classList.remove('is-visible');
  popup.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================================
//  EXIT POPUP 2 — clique no botão "Plano Básico"
// ============================================================
function initExitPopup2() {
  const popup     = document.getElementById('exit-popup-2');
  const btnBasico = document.getElementById('btn-basico');

  btnBasico.addEventListener('click', e => {
    e.preventDefault();
    openPopup(popup);
  });

  popup.querySelector('.popup__close').addEventListener('click', () => closePopup(popup));

  popup.querySelector('[data-checkout="premiumDescontoBasico"]').addEventListener('click', e => {
    e.preventDefault();
    window.location.href = CHECKOUT_URLS.premiumDescontoBasico;
  });

  popup.querySelector('[data-checkout="basico"]').addEventListener('click', e => {
    e.preventDefault();
    closePopup(popup);
    window.location.href = CHECKOUT_URLS.basico;
  });

  popup.addEventListener('click', e => {
    if (e.target === popup) closePopup(popup);
  });
}

// ============================================================
//  CHECKOUT — botão Premium na seção de pricing
// ============================================================
function initCheckoutLinks() {
  document.querySelectorAll('[data-checkout="premium"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = CHECKOUT_URLS.premium;
    });
  });
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initSmoothScroll();
  initExitPopup2();
  initCheckoutLinks();
});
