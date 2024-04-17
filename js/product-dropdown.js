document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".product-dropdown");
    const dropdown = document.querySelector(".dropdown");

    dropdownToggle.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });
});