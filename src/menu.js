(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefPurchase = document.querySelector('[data-menu-purchase]');
  const mobileMenuRefNav = document.querySelector('[data-menu-nav]');

  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  let dataMenuToggle = true;
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefPurchase.classList.toggle('is-open');
    mobileMenuRefNav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
    dataMenuToggle = true;
  });
})();
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);
//   // Закрываем мобильное меню на более широких экранах
// в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
