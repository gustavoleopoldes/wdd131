
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuBtn.innerHTML = navMenu.classList.contains("active") ? "&#10006;" : "&#9776;"; 
    });
});
