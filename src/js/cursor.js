/**
 * Custom Desktop Cursor & Magnetic Interactions
 * Disabled on touch/mobile devices and for reduced motion
 */
export function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');

  // Check if touch device or reduced motion
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!cursor || !follower || isTouch || prefersReduced) {
    if (cursor) cursor.style.display = 'none';
    if (follower) follower.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  // Smooth follower ticker
  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Hover detection for interactive elements
  const interactiveTargets = document.querySelectorAll('a, button, input, textarea, .card-charcoal, .orbit-dish-name, .pagination-pill');
  interactiveTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // Magnetic Button Effect on Primary CTAs
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-outline');
  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0) scale(1.02)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0) scale(1)';
    });
  });
}
