const burgerButton = document.querySelector('.mobile-menu-burger-btn');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const menuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

if (burgerButton && closeButton && menuWrapper) {
  burgerButton.addEventListener('click', function () {
    toggleMenu();
  });
  closeButton.addEventListener('click', function () {
    menuWrapper.classList.remove('is-open');
  });
}

mobileMenuContainer.addEventListener('click', event => {
  menuWrapper.classList.remove('is-open');
});

function toggleMenu() {
  if (menuWrapper.classList.contains('is-open')) {
    menuWrapper.classList.remove('is-open');
  } else {
    menuWrapper.classList.add('is-open');
  }
}

document.addEventListener('click', function (event) {
  const menuTitle = document.querySelector('.title-menu');
  const menuWrapper = document.querySelector('.tablet-menu-wrapper');
  if (event.target === menuTitle || event.target.closest('.tablet-menu-link')) {
    menuWrapper.classList.toggle('is-open');
  } else {
    menuWrapper.classList.remove('is-open');
  }

  const menuLinks = document.querySelectorAll('.tablet-menu-link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuWrapper.classList.add('visually-hidden');
    });
  });

  const menuItems = document.querySelectorAll('.tablet-menu-item');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      menuWrapper.classList.remove('is-open');
    });
  });
});

//=====modal=======//
// modal window open - close //
// const formFooterButton = document.querySelector(".footer-button-submit");
const modalWindow = document.querySelector('.modal-window');
const modalWindowClose = document.querySelector('.modal-close');

export function addClassIsOpenModal() {
  return modalWindow.classList.add('is-open');
}
function deleteClassIsOpenModal() {
  return modalWindow.classList.remove('is-open');
}
// const isOpenModalWindow = formFooterButton.addEventListener("click", addClassIsOpenModal); //open modal on submit form
modalWindowClose.addEventListener('click', deleteClassIsOpenModal); // close moda on click x

//close modal keydown esc
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    return modalWindow.classList.remove('is-open');
  }
});

// close modal click backdrop
modalWindow.addEventListener('click', event => {
  const clickedElement = event.target;
  if (clickedElement !== modalWindow) {
    return;
  }
  return modalWindow.classList.remove('is-open');
});
// modal window open - close //
