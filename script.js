const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");
const homeLinks = document.querySelectorAll(".home-link");

function showSection(targetId) {
  navButtons.forEach((btn) => btn.classList.remove("active"));
  pages.forEach((page) => page.classList.remove("active"));

  const targetPage = document.getElementById(targetId);
  const targetNavBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);

  if (targetPage) targetPage.classList.add("active");
  if (targetNavBtn) targetNavBtn.classList.add("active");
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSection(button.dataset.target);
  });
});

homeLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(link.dataset.target);
  });
});