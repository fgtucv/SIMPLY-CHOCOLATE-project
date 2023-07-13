(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal6]"),
        closeModalBtn: document.querySelector("[data-close-modal6]"),
        backdrop: document.querySelector("[data-backdrop6]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden6");
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();