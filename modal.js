(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-body]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", closeModalOnBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.body.classList.toggle("modal-open");
  }

  function closeModalOnBackdropClick(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.remove("is-open");
    }
  }
})();
