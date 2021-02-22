(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-ice-coffee-modal]"),
        closeModalBtn: document.querySelector("[data-close-ice-coffee-modal]"),
        backdrop: document.querySelector("[data-backdrop-ice-coffee]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function logBackdropClick() {
        console.log("Это клик в бекдроп");
    }

  })();