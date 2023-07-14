(() => {
    const refs = {
        openModalBtn: document.querySelector("[c]"),
        closeModalBtn: document.querySelector("[data-close-modal3]"),
        backdrop: document.querySelector("[data-backdrop3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden3");
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();