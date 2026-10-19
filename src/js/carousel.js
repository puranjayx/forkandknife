/**
 * Testimonial Reviews Carousel (Swipe & Drag enabled)
 */
export function initReviewsCarousel() {
  const wrapper = document.getElementById('reviewsWrapper');
  const track = document.getElementById('reviewsTrack');
  if (!wrapper || !track) return;

  const cards = track.querySelectorAll('.review-card');
  if (cards.length === 0) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let currentIndex = 0;

  // Touch & Mouse Drag handlers
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  function touchStart(index) {
    return function (event) {
      isDown = true;
      startX = getPositionX(event);
      animationID = requestAnimationFrame(animation);
      track.style.cursor = 'grabbing';
    };
  }

  function touchMove(event) {
    if (isDown) {
      const currentX = getPositionX(event);
      currentTranslate = prevTranslate + currentX - startX;
    }
  }

  function touchEnd() {
    isDown = false;
    cancelAnimationFrame(animationID);
    track.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;

    // Slide next or prev based on drag distance
    if (movedBy < -80 && currentIndex < cards.length - 1) {
      currentIndex += 1;
    }

    if (movedBy > 80 && currentIndex > 0) {
      currentIndex -= 1;
    }

    setPositionByIndex();
  }

  function animation() {
    setSliderPosition();
    if (isDown) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    const cardWidth = cards[0].offsetWidth + 24; // including gap
    currentTranslate = -currentIndex * cardWidth;
    prevTranslate = currentTranslate;
    track.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    setSliderPosition();
    setTimeout(() => {
      track.style.transition = '';
    }, 400);
  }

  // Add event listeners
  cards.forEach((card, index) => {
    // Touch events
    card.addEventListener('touchstart', touchStart(index), { passive: true });
    card.addEventListener('touchend', touchEnd);
    card.addEventListener('touchmove', touchMove, { passive: true });

    // Mouse events
    card.addEventListener('mousedown', touchStart(index));
    card.addEventListener('mouseup', touchEnd);
    card.addEventListener('mouseleave', () => { if (isDown) touchEnd(); });
    card.addEventListener('mousemove', touchMove);
  });

  // Prevent image drag
  window.oncontextmenu = function (event) {
    if (event.target.closest('#reviewsTrack')) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  };
}
