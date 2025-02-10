import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import pathSprite from "../img/sprite.svg";

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.reviews-swiper-container');

  const showError = error => {
    iziToast.error({
      title: '❌',
      message: error,
      position: 'topRight',
      progressBar: true,
      close: false,
      icon: false,
      timeout: 3000,
    });
  };

  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch reviews');
      }
      return res.json();
    })
    .then(data => {
      if (data.length === 0) {
        throw new Error('Failed to fetch reviews');
      }

      swiperContainer.innerHTML = `
            <div class='swiper'>
              <div class='swiper-wrapper'>
                ${data
                  .map(
                    review => `
                  <div class='swiper-slide'>
                    <img src='${review.avatar_url}' alt='${review.author}'>
                    <div class='swiper-slide-review'>
                    <h3>${review.author}</h3>
                    <p>${review.review}</p>
                    </div>
                  </div>`
                  )
                  .join('')}
              </div>
              <!-- Кнопки навігації -->
              <div class="swiper-buttons">
              <div class="swiper-button-prev">
                <svg class="swiper-button-icon">
                  <use href="${pathSprite}#icon-swiperrigth"></use>
                </svg>
              </div>
              <div class="swiper-button-next">
                <svg class="swiper-button-icon">
                  <use href="${pathSprite}#icon-swiperrigth"></use>
                </svg>
              </div>
              </div>
            </div>`;

      let reviewsSwiper = new Swiper('.reviews .swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        // breakpoints: {
        //   768: { slidesPerView: 2 },
        //   1440: { slidesPerView: 4 },
        // },
      });

      function updateSwiper() {
        let slides = 1;
        if (window.matchMedia('(min-width: 768px)').matches) slides = 2;
        if (window.matchMedia('(min-width: 1440px)').matches) slides = 4;

        reviewsSwiper.params.slidesPerView = slides;
        reviewsSwiper.update();
      }

      window.addEventListener('resize', updateSwiper);
      updateSwiper();
    })
    .catch(error => {
      showError(error.message);
      swiperContainer.innerHTML = "<p class='not-found'>Not found</p>";
    });
});
