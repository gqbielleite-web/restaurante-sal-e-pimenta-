const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = siteNav.querySelectorAll("a");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Abrir menu" : "Fechar menu"
  );
  siteNav.classList.toggle("is-open", !isExpanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu =
    siteNav.contains(event.target) || menuToggle.contains(event.target);

  if (!clickedInsideMenu) {
    closeMenu();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();