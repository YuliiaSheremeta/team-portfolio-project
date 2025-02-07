const burgerButton = document.querySelector('.mobile-menu-burger-btn');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

if (burgerButton && closeButton && mobileMenuWrapper) {
  burgerButton.addEventListener('click', toggleMobileMenu);
  closeButton.addEventListener('click', toggleMobileMenu);
  mobileMenuContainer.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu(e) {
  e.stopPropagation();
  if (mobileMenuWrapper.classList.contains('is-open')) {
    mobileMenuWrapper.classList.remove('is-open');
  } else {
    mobileMenuWrapper.classList.add('is-open');
  }
}

const menuTitle = document.querySelector('.title-menu');
const menuWrapper = document.querySelector('.tablet-menu-wrapper');

function toggleMenu(e) {
  e.stopPropagation();
  if (menuWrapper.classList.contains('is-open')) {
    menuWrapper.classList.remove('is-open');
  } else {
    menuWrapper.classList.add('is-open');
  }
}

menuTitle.addEventListener('click', toggleMenu);
menuWrapper.addEventListener('click', toggleMenu);

const menuItems = document.querySelectorAll('.tablet-menu-item');
menuItems.forEach(function (item) {
  item.addEventListener('click', toggleMenu);
});

//=====modal=======//
// modal window open - close //
const formFooterButton = document.querySelector('.footer-button-submit');
const modalWindow = document.querySelector('.modal-window');
const modalWindowClose = document.querySelector('.modal-close');

export function addClassIsOpenModal() {
  return modalWindow.classList.add('is-open');
}
function deleteClassIsOpenModal() {
  return modalWindow.classList.remove('is-open');
}

formFooterButton.addEventListener('click', addClassIsOpenModal);
modalWindowClose.addEventListener('click', deleteClassIsOpenModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    return modalWindow.classList.remove('is-open');
  }
});

modalWindow.addEventListener('click', event => {
  const clickedElement = event.target;
  if (clickedElement !== modalWindow) {
    return;
  }
  return modalWindow.classList.remove('is-open');
});
