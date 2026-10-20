/**
 * Fork & Knife (फोर्क & नाइफ) - Main Application Bootstrap
 */
import { initSmoothScroll } from './js/lenis-scroll.js';
import { initPreloader } from './js/preloader.js';
import { initHeroOrbit } from './js/hero-orbit.js';
import { initScrollAnimations } from './js/scroll-animations.js';
import { initReviewsCarousel } from './js/carousel.js';
import { initBookingForm } from './js/booking-form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Initialize Modules
  initPreloader(() => {
    // Run after preloader completes curtain wipe
    initSmoothScroll();
    initHeroOrbit();
    initScrollAnimations();
    initReviewsCarousel();
    initBookingForm();
  });
});
