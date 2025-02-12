import Accordion from 'accordion-js';

document.addEventListener("DOMContentLoaded", function () {
    new Accordion("#accordion-faq-left", {
        duration: 400,
        showMultiple: true,
        collapse: true,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Accordion("#accordion-faq-right", {
        duration: 400,
        showMultiple: true,
        collapse: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
      const buttons = document.querySelectorAll('.section-faq-item-button');
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          this.classList.toggle('rotated');
        });
      });
    });