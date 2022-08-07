(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefPurchase = document.querySelector('[data-menu-purchase]');
  //   const mobileMenuRefCont = document.querySelector('[data-menu-cont]');
  //   const mobileMenuRefSoc = document.querySelector('[data-menu-social]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefPurchase.classList.toggle('is-open');
    // mobileMenuRefCont.classList.toggle('is-open');
    // mobileMenuRefSoc.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });
})();
