const burgerButton = document.querySelector('.mobile-menu-burger-btn');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

if (burgerButton && closeButton && mobileMenuWrapper) {
  burgerButton.addEventListener('click', toggleMobileMenu);
  closeButton.addEventListener('click', toggleMobileMenu);
  mobileMenuContainer.addEventListener('click', toggleMobileMenu);
  document.addEventListener('keydown', handleKeydown);
}

function toggleMobileMenu(e) {
  e.stopPropagation();
  if (mobileMenuWrapper.classList.contains('is-open')) {
    mobileMenuWrapper.classList.remove('is-open');
  } else {
    mobileMenuWrapper.classList.add('is-open');
  }
}
function handleKeydown(e) {
  // Перевіряємо, чи натиснута клавіша 'Esc'
  if (e.key === 'Escape') {
    if (mobileMenuWrapper.classList.contains('is-open')) {
      mobileMenuWrapper.classList.remove('is-open');
    }
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
