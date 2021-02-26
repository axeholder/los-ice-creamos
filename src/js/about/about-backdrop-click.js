(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-about-open-modal]"),
        closeModalBtn: document.querySelector("[data-about-close-modal]"),
        backdrop: document.querySelector("[data-about-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open-about-modal");
    }

    function logBackdropClick() {
        console.log("Это клик в бекдроп");
    }

})();

(() => {

  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );
  });
})();