/**
 * Interactive Hero Orbit & Arc Dish Switcher
 */
import gsap from 'gsap';
import { IMAGES } from '../data/images.js';

const DISH_LIST = [
  {
    titleHTML: 'PASTA WITH <em class="italic-accent">White Sauce</em>',
    subtitle: IMAGES.hero.dish1.subtitle,
    image: IMAGES.hero.dish1.src,
    alt: IMAGES.hero.dish1.alt
  },
  {
    titleHTML: 'STEAMED <em class="italic-accent">Veg Momos</em>',
    subtitle: IMAGES.hero.dish2.subtitle,
    image: IMAGES.hero.dish2.src,
    alt: IMAGES.hero.dish2.alt
  },
  {
    titleHTML: 'CRISPY <em class="italic-accent">Chicken Lollipop</em>',
    subtitle: IMAGES.hero.dish3.subtitle,
    image: IMAGES.hero.dish3.src,
    alt: IMAGES.hero.dish3.alt
  },
  {
    titleHTML: 'SPECIAL <em class="italic-accent">Jhol Momo</em>',
    subtitle: IMAGES.hero.dish4.subtitle,
    image: IMAGES.hero.dish4.src,
    alt: IMAGES.hero.dish4.alt
  }
];

export function initHeroOrbit() {
  const plateImg = document.getElementById('heroPlateImg');
  const mainTitle = document.getElementById('heroMainTitle');
  const subTitle = document.getElementById('heroSubTitle');
  const paginationButtons = document.querySelectorAll('#heroPagination .pagination-pill');
  const orbitLabels = document.querySelectorAll('.orbit-dish-name');
  const orbitStage = document.getElementById('heroOrbitStage');

  if (!plateImg || !mainTitle) return;

  let currentIndex = 0;
  let isAnimating = false;

  function switchDish(newIndex, direction = 1) {
    if (newIndex === currentIndex || isAnimating) return;
    isAnimating = true;

    const dish = DISH_LIST[newIndex];
    currentIndex = newIndex;

    // Update pagination buttons
    paginationButtons.forEach((btn, i) => {
      const active = i === currentIndex;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    // Update orbit dish label highlights
    orbitLabels.forEach((label) => {
      const targetDishIndex = parseInt(label.getAttribute('data-dish') || '0', 10);
      label.classList.toggle('is-active', targetDishIndex === currentIndex);
    });

    // Animate Title crossfade
    gsap.to([mainTitle, subTitle], {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        mainTitle.innerHTML = dish.titleHTML;
        subTitle.textContent = dish.subtitle;
        gsap.to([mainTitle, subTitle], {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out'
        });
      }
    });

    // Animate Plate: scale down, rotate out, switch image, rotate in
    const rotationAmount = direction > 0 ? 35 : -35;
    gsap.to(plateImg, {
      scale: 0.8,
      rotation: rotationAmount,
      opacity: 0.3,
      duration: 0.28,
      ease: 'power2.in',
      onComplete: () => {
        plateImg.src = dish.image;
        plateImg.alt = dish.alt;

        gsap.fromTo(plateImg, 
          { scale: 0.8, rotation: -rotationAmount, opacity: 0.3 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'back.out(1.4)',
            onComplete: () => {
              isAnimating = false;
            }
          }
        );
      }
    });
  }

  // Bind pagination pills
  paginationButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index') || '0', 10);
      switchDish(index, index > currentIndex ? 1 : -1);
    });
  });

  // Bind orbit labels
  orbitLabels.forEach((label) => {
    label.addEventListener('click', () => {
      const index = parseInt(label.getAttribute('data-dish') || '0', 10);
      switchDish(index, index > currentIndex ? 1 : -1);
    });
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchEndX = 0;

  if (orbitStage) {
    orbitStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    orbitStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      // Swipe Left -> Next
      const nextIndex = (currentIndex + 1) % DISH_LIST.length;
      switchDish(nextIndex, 1);
    } else if (touchEndX > touchStartX + threshold) {
      // Swipe Right -> Prev
      const prevIndex = (currentIndex - 1 + DISH_LIST.length) % DISH_LIST.length;
      switchDish(prevIndex, -1);
    }
  }

  // Auto advance every 7 seconds when idle
  let autoTimer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % DISH_LIST.length;
    switchDish(nextIndex, 1);
  }, 7000);

  // Pause auto advance when user interacts
  [plateImg, ...paginationButtons].forEach((el) => {
    el.addEventListener('mouseenter', () => clearInterval(autoTimer));
    el.addEventListener('touchstart', () => clearInterval(autoTimer), { passive: true });
  });
}
