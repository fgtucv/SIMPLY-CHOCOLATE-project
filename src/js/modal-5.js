(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal5]"),
        closeModalBtn: document.querySelector("[data-close-modal5]"),
        backdrop: document.querySelector("[data-backdrop5]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden5");
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();