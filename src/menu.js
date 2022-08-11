(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose1 = document.querySelector('[data-menu-button-close1]');
  const menuBtnRefClose2 = document.querySelector('[data-menu-button-close2]');
  const menuBtnRefClose3 = document.querySelector('[data-menu-button-close3]');
  const menuBtnRefClose4 = document.querySelector('[data-menu-button-close4]');
  const menuBtnRefClose5 = document.querySelector('[data-menu-button-close5]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefPurchase = document.querySelector('[data-menu-purchase]');
  const mobileMenuRefNav = document.querySelector('[data-menu-nav]');

  let expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.addEventListener('click', togleMenu);
  if (window.matchMedia('(min-width: 400px)').matches) {
    menuBtnRefClose1.addEventListener('click', togleMenuClose);
    menuBtnRefClose2.addEventListener('click', togleMenuClose);
    menuBtnRefClose3.addEventListener('click', togleMenuClose);
    menuBtnRefClose4.addEventListener('click', togleMenuClose);
    menuBtnRefClose5.addEventListener('click', togleMenuClose);
  }

  function togleMenu() {
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefPurchase.classList.toggle('is-open');
    mobileMenuRefNav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  }
  function togleMenuClose() {
    // expanded = 'false';
    // window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    //   if (!e.matches) return;
    // console.log('menu-close');
    // menuBtnRef.classList.toggle('');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefPurchase.classList.toggle('is-open');
    mobileMenuRefNav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');

    // });
  }
})();
