import './js/header.js';
import './js/hero.js';
import './js/aboutme.js';
import './js/benefits.js';
import './js/projects.js';
import './js/faq.js';
import './js/covers.js';
import './js/reviews.js';
import './js/worktogether.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

//* AOS
window.onload = () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: true,
  });
};

AOS.refresh();
