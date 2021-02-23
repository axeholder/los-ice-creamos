(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		// closeMenuBtn: document.querySelector("[data-menu-close]"),
		mobileMenu: document.querySelector("[data-menu]"),
		closeMenu: document.querySelector("[menu-close]"),
	};

	refs.openMenuBtn.onclick = function () {
		refs.openMenuBtn.classList.add("is-hidden")
		refs.mobileMenu.classList.add("is-open");
	}
	
	refs.closeMenu.onclick = function () {
		refs.openMenuBtn.classList.remove("is-hidden")
		refs.mobileMenu.classList.remove("is-open");
	}

	// Запасной вариант
	// refs.openMenuBtn.addEventListener("click", toggleMenu);
	// refs.closeMenuBtn.addEventListener("click", toggleMenu);

	// function toggleMenu() {
	// 	refs.openMenuBtn.classList.toggle("is-hidden")
	// 	refs.mobileMenu.classList.toggle("is-open");
	// }
})();