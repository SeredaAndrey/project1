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
