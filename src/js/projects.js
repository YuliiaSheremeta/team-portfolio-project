import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    loop: false, 
    slidesPerView: 1,
    navigation: {
        nextEl: '.projects-swiper-button-next',
        prevEl: '.projects-swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
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

function updateButtons(swiper) {
    const prevButton = document.querySelector('.projects-swiper-button-prev');
    const nextButton = document.querySelector('.projects-swiper-button-next');

     if (!prevButton || !nextButton) return;
  
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd; 

    prevButton.classList.toggle('projects-swiper-button-disabled', swiper.isBeginning);
    nextButton.classList.toggle('projects-swiper-button-disabled', swiper.isEnd);
    
}




