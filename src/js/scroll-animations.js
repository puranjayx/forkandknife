/**
 * GSAP ScrollTrigger Animations & Parallax
 * Performance rule: Animate only transform and opacity. Target 60fps.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // 1. Sticky Navbar Always Visible (with scrolled backdrop blur)
  const header = document.getElementById('header');
  if (header) {
    // Ensure is-hidden is never applied
    header.classList.remove('is-hidden');

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const currentScrollY = self.scroll();

        // Background blur & elevation toggle
        if (currentScrollY > 40) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      }
    });
  }

  // Active Nav Link Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 40%',
      end: 'bottom 40%',
      onEnter: () => updateActiveNavLink(section.id),
      onEnterBack: () => updateActiveNavLink(section.id)
    });
  });

  function updateActiveNavLink(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-active', href === `#${id}`);
    });
  }

  // 2. Multi-depth Parallax on Floating Ingredients (Lightweight & responsive)
  const parallaxItems = [
    { selector: '.hero-decor-1', y: -40, rotation: 15 },
    { selector: '.hero-decor-2', y: -30, rotation: -12 },
    { selector: '.hero-decor-3', y: -50, rotation: 18 },
    { selector: '.hero-decor-4', y: -35, rotation: -10 },
    { selector: '.hero-decor-5', y: -45, rotation: 15 },
  ];

  parallaxItems.forEach(({ selector, y, rotation }) => {
    const el = document.querySelector(selector);
    if (el) {
      gsap.to(el, {
        y,
        rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3
        }
      });
    }
  });

  // General floating ingredients across the page
  document.querySelectorAll('.section .floating-ingredient').forEach((decor, idx) => {
    const direction = idx % 2 === 0 ? -25 : 25;
    gsap.to(decor, {
      y: direction,
      rotation: direction * 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: decor.closest('.section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.4
      }
    });
  });

  // 3. Staggered Fade-Up for Section Headers
  document.querySelectorAll('.section-header').forEach((headerEl) => {
    gsap.fromTo(headerEl.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerEl,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // 4. About Grid Reveal
  const aboutGrid = document.querySelector('.about-grid');
  if (aboutGrid) {
    gsap.fromTo('.about-category-item',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-categories',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo('.about-dish-img',
      { opacity: 0, scale: 0.9, rotation: -15 },
      {
        opacity: 1,
        scale: 1,
        rotation: -5,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-visual',
          start: 'top 80%'
        }
      }
    );
  }

  // 5. Popular Dishes Cards Staggered In
  const dishesGrid = document.querySelector('.dishes-grid');
  if (dishesGrid) {
    gsap.fromTo('.dish-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dishesGrid,
          start: 'top 80%'
        }
      }
    );
  }

  // 6. Spotlight Callouts Reveal
  const spotlightSection = document.getElementById('spotlight');
  if (spotlightSection) {
    gsap.fromTo('.spotlight-center-dish',
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.spotlight-wrapper',
          start: 'top 75%'
        }
      }
    );

    gsap.fromTo('.callout-item',
      { opacity: 0, scale: 0.9, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.spotlight-callouts',
          start: 'top 75%'
        }
      }
    );
  }

  // 7. Fresh Flavors Pan Reveal
  const panImg = document.querySelector('.pan-img');
  if (panImg) {
    gsap.fromTo(panImg,
      { opacity: 0, scale: 0.8, rotation: -25 },
      {
        opacity: 1,
        scale: 1,
        rotation: -10,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.flavor-center-pan',
          start: 'top 80%'
        }
      }
    );
  }
}
