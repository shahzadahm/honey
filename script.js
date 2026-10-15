/**
 * लक्ष्मी ज्वेलर्स (Laxmi Jewellers)
 * Mobile menu, lightbox enquiries, scroll reveals and active navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP = '917394993006';
  const body = document.body;

  // Dynamic copyright year
  const yearElement = document.getElementById('current-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Header state + menu offset
  const header = document.getElementById('top-header');
  const quickbar = document.querySelector('.quickbar');
  let lastY = window.scrollY;

  function updateHeader() {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    document.documentElement.style.setProperty('--header-bottom', `${header.getBoundingClientRect().bottom}px`);

    // Tuck the mobile quick bar away while scrolling down, bring it back on scroll up
    if (quickbar) quickbar.classList.toggle('is-hidden', y > lastY && y > 400);
    lastY = y;
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);

  // Mobile menu
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    updateHeader();
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    body.classList.toggle('is-locked', open);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    window.matchMedia('(min-width: 1100px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  }

  // Lightbox (native <dialog>: focus trapping and Escape handling come built in)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitleHi = document.getElementById('lightbox-title-hi');
  const lightboxTitleEn = document.getElementById('lightbox-title-en');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxEnquire = document.getElementById('lightbox-enquire');

  function openLightbox(imgSrc, alt, titleHi, titleEn) {
    if (!lightbox || !lightboxImg || typeof lightbox.showModal !== 'function') return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = alt || titleEn || 'Jewellery preview';
    if (lightboxTitleHi) lightboxTitleHi.textContent = titleHi || '';
    if (lightboxTitleEn) lightboxTitleEn.textContent = titleEn || '';

    if (lightboxEnquire) {
      const msg = encodeURIComponent(`नमस्ते Laxmi Jewellers, मुझे "${titleHi} (${titleEn})" के बारे में जानकारी चाहिए।`);
      lightboxEnquire.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
    }

    lightbox.showModal();
    body.classList.add('is-locked');
  }

  if (lightbox) {
    lightbox.addEventListener('close', () => body.classList.remove('is-locked'));
    // Click on the backdrop (outside the dialog box) closes it
    lightbox.addEventListener('click', e => {
      const r = lightbox.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) lightbox.close();
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox.close());

  // Gallery items
  document.querySelectorAll('.look').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) openLightbox(img.getAttribute('src'), img.alt, item.dataset.titleHi, item.dataset.titleEn);
    });
  });

  // Collection pieces: image and "View & Enquire" both open the preview
  document.querySelectorAll('.piece').forEach(piece => {
    const img = piece.querySelector('img');
    const open = () => img && openLightbox(img.getAttribute('src'), img.alt, piece.dataset.titleHi, piece.dataset.titleEn);
    piece.querySelectorAll('.piece__media, [data-open-piece]').forEach(btn => btn.addEventListener('click', open));
  });

  // Escape closes the mobile menu (the dialog handles its own Escape)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
      setMenu(false);
      toggle?.focus();
    }
  });

  // Scroll reveals
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // Active navigation highlight
  const navLinks = document.querySelectorAll('.header__nav .nav-link');
  const sections = [...navLinks]
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }
});
