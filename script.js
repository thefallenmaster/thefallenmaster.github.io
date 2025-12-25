window.showService = function () {
    openModal("Currently not available");
};

window.showSkills = function () {
    openModal("Currently Learning");
};

function openModal(message) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    if (!modal || !text) return;

    text.innerText = message;
    modal.style.display = "flex";
}

window.closeModal = function () {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
};
