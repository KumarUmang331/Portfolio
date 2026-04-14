// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}

// Navigation (ONLY for internal buttons, not links)
document.querySelectorAll(".nav-btn, .home-link").forEach(btn => {
  btn.addEventListener("click", function () {
    const target = this.getAttribute("data-target");

    if (!target) return;

    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});
