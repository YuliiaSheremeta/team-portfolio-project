import Swiper from 'swiper/bundle';
import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
    onOpen: function (currentElement) {
      console.log(currentElement);
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const icon = document.querySelectorAll('.about-trigger');
  icon.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('rotated');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.about-swiper-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        updateLeftmostSlide(this);
      },
      slideChangeTransitionEnd: function () {
        updateLeftmostSlide(this);
      },
    },
  });

  function updateLeftmostSlide(swiperInstance) {
    swiperInstance.slides.forEach(function (slide) {
      slide.classList.remove('leftmost');
    });

    if (swiperInstance.slides[swiperInstance.activeIndex]) {
      swiperInstance.slides[swiperInstance.activeIndex].classList.add(
        'leftmost'
      );
    }
  }
});
