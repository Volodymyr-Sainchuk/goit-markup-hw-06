(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  refs.menu.addEventListener("click", closeMenuOnBackdropClick);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }

  function closeMenuOnBackdropClick(e) {
    if (e.target === e.currentTarget) {
      refs.menu.classList.remove("is-open");
    }
  }
})();
