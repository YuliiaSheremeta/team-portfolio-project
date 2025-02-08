import Swiper from 'swiper';

import { Navigation, Keyboard} from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard], 
    loop: false, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    grabCursor: true, 
    on: {
        init: function (swiper) {
            updateButtons(swiper);
        },
        slideChange: function (swiper) {
            updateButtons(swiper);
        }
    }
});

function updateButtons() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

     if (!prevButton || !nextButton) return;
  
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd; 

    prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
    
}




