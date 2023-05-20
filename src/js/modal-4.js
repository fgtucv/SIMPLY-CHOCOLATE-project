(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal4]"),
        closeModalBtn: document.querySelector("[data-close-modal4]"),
        backdrop: document.querySelector("[data-backdrop4]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden4");
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();