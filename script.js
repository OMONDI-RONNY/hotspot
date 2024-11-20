// Open Modal
function openModal(plan) {
    document.getElementById(plan).style.display = "block";
}

// Close Modal
function closeModal(plan) {
    document.getElementById(plan).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal('basic');
        closeModal('standard');
        closeModal('premium');
    }
};
