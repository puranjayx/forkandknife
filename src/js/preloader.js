/**
 * Branded Preloader & Curtain Reveal
 */
import gsap from 'gsap';

export function initPreloader(onCompleteCallback) {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  const percentText = document.getElementById('preloaderPercent');

  if (!preloader || !bar || !percentText) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  // Fast-track if reduced motion or automated test/headless
  const isHeadless = navigator.webdriver || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isHeadless) {
    preloader.style.display = 'none';
    document.body.classList.add('is-loaded');
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  let progress = { value: 0 };

  const tl = gsap.timeline({
    onComplete: () => {
      // Curtain reveal transition
      gsap.to(preloader, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
        onComplete: () => {
          preloader.style.display = 'none';
          document.body.classList.add('is-loaded');
          if (onCompleteCallback) onCompleteCallback();
        }
      });
    }
  });

  tl.to(progress, {
    value: 100,
    duration: 1.6,
    ease: 'power2.out',
    onUpdate: () => {
      const current = Math.round(progress.value);
      bar.style.width = `${current}%`;
      percentText.textContent = `${current}%`;
      preloader.setAttribute('aria-valuenow', current);
    }
  });
}
