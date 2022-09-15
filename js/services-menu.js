const linkServicesMenu = document.querySelector('.link__services-menu');
const servicesMenuWrapper = document.querySelector('.services-menu__wrapper');

linkServicesMenu.addEventListener('click', () => {
    servicesMenuWrapper.classList.toggle('hidden');
})