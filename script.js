<script>

    function showService() {
        openModal("Currently not available");
    }

    function showSkills() {
        openModal("Currently Learning");
    }

    function openModal(message) {
        document.getElementById("modal-text").innerText = message;
        document.getElementById("modal").style.display = "flex";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }
</script>