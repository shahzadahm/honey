/**
 * लक्ष्मी ज्वेलर्स (Laxmi Jewellers)
 * Interactive scripts: Mobile navigation, Lightbox modal, and enquiries
 */

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic copyright year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Lightbox Modal
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitleHi = document.getElementById('lightbox-title-hi');
  const lightboxTitleEn = document.getElementById('lightbox-title-en');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxEnquireBtn = document.getElementById('lightbox-enquire-btn');

  function openLightbox(imgSrc, titleHi, titleEn) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = titleEn || 'Jewellery preview';
    if (lightboxTitleHi) lightboxTitleHi.textContent = titleHi || '';
    if (lightboxTitleEn) lightboxTitleEn.textContent = titleEn || '';
    
    if (lightboxEnquireBtn) {
      const msg = encodeURIComponent(`नमस्ते Laxmi Jewellers, मुझे "${titleHi} (${titleEn})" के बारे में जानकारी चाहिए।`);
      lightboxEnquireBtn.href = `https://wa.me/918574591059?text=${msg}`;
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Attach lightbox to Gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const titleHi = item.getAttribute('data-title-hi') || '';
      const titleEn = item.getAttribute('data-title-en') || '';
      if (img) {
        openLightbox(img.getAttribute('src'), titleHi, titleEn);
      }
    });
  });

  // Attach lightbox to Collection cards "View / Enquire"
  const collectionCards = document.querySelectorAll('.collection-card');
  collectionCards.forEach(card => {
    const previewBtn = card.querySelector('.btn-preview-card');
    if (previewBtn) {
      previewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const img = card.querySelector('.collection-img');
        const titleHi = card.querySelector('.collection-title-hi')?.textContent || '';
        const titleEn = card.querySelector('.collection-title-en')?.textContent || '';
        if (img) {
          openLightbox(img.getAttribute('src'), titleHi, titleEn);
        }
      });
    }
  });

  // Escape key closes modal & mobile drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle?.classList.remove('active');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-item a');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
});
