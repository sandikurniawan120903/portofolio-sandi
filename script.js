
//elemen menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

//tutup menu
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// tutup link dipilih
const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// muncul tahun secara otomatis
document.getElementById("year").textContent =
    new Date().getFullYear();
