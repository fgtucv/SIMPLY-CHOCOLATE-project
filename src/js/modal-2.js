(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal2]"),
        closeModalBtn: document.querySelector("[data-close-modal2]"),
        backdrop: document.querySelector("[data-backdrop2]"),
        sendBtn: document.querySelector("[data-send]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.sendBtn.addEventListener("click", closeModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden2");
    }

    function closeModal() {
        refs.backdrop.classList.toggle("is-close");
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();