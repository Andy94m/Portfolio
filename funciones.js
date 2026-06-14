document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const toTopBtn = document.getElementById('toTopBtn');

  // === GENERATE PARTICLES ===
  function createParticles(selector, count) {
    const container = document.querySelector(selector);
    if (!container) return;
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span');
      span.style.left = `${Math.random() * 93 + 2}%`;
      const size = Math.random() * 8 + 4;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.animationDuration = `${Math.random() * 12 + 15}s`;
      span.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(span);
    }
  }
  createParticles('.particles', 25);
  createParticles('.particles-down', 25);

  // === SCROLL REVEAL ===
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 10, behavior: 'smooth' });
      }
    });
  });

  // === HAMBURGER MENU ===
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // === TYPING EFFECT ===
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const text = 'Hola mundo!';
    let i = 0;
    function type() {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
      }
    }
    setTimeout(type, 600);
  }

  // === COMBINED SCROLL EVENTS ===
  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 50;
    header?.classList.toggle('header-scrolled', scrolled);
    toTopBtn?.classList.toggle('visible', window.scrollY > 200);
  });

  // === TO TOP BUTTON ===
  if (toTopBtn) {
    toTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
