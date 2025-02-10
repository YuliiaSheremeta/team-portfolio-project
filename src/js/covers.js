document.addEventListener('DOMContentLoaded', function () {
  const coversSection = document.querySelector('.covers-section');
  const marquees = document.querySelectorAll('.marquee__line');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
    marquees.forEach(marquee => {
      marquee.style.animationPlayState = isElementInViewport(coversSection)
        ? 'running'
        : 'paused';
    });
  }
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
});
