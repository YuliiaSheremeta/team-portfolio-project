const lazyBackgrounds = document.querySelectorAll('.hero-section');

const loadBackground = (entry) => {
    const bgMobile = entry.target.getAttribute('data-bg-mobile');
    const bgMobileRetina = entry.target.getAttribute('data-bg-mobile-retina');
    const bgTablet = entry.target.getAttribute('data-bg-tablet');
    const bgTabletRetina = entry.target.getAttribute('data-bg-tablet-retina');
    const bgDesktop = entry.target.getAttribute('data-bg-desktop');
    const bgDesktopRetina = entry.target.getAttribute('data-bg-desktop-retina');

    const pixelRatio = window.devicePixelRatio;
    let imageToUse;

    if (window.innerWidth < 768) { // Мобільні
        imageToUse = pixelRatio >= 2 ? bgMobileRetina : bgMobile;
    } else if (window.innerWidth < 1440) { // Планшетні
        imageToUse = pixelRatio >= 2 ? bgTabletRetina : bgTablet;
    } else { // Десктопні
        imageToUse = pixelRatio >= 2 ? bgDesktopRetina : bgDesktop;
    }

    entry.target.style.backgroundImage = `url(${imageToUse})`;
    entry.target.style.backgroundSize = 'cover';
    entry.target.style.backgroundPosition = 'center';

    observer.unobserve(entry.target);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(loadBackground);
});


lazyBackgrounds.forEach(bg => {
    observer.observe(bg);
});
