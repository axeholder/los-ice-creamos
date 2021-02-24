(() => {
    const refs = {
		 openModalBtn: document.querySelector("[data-buy-open-modal]"),
		 openModalBtnn: document.querySelector("[data-buy-open-modall]"),
        closeModalBtn: document.querySelector("[data-buy-close-modal]"),
        backdrop: document.querySelector("[data-buy-backdrop]"),
    };

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.openModalBtnn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open-buy-modal");
    }

    function logBackdropClick() {
        console.log("Это клик в бекдроп");
    }

})();