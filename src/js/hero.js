document.querySelectorAll('.hero-social-item').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('.hero-social-link');
        window.open(link.href, '_blank'); });
});