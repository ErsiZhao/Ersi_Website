// menu.js
async function loadMenu() {
  const host = document.getElementById("menu-host");
  if (!host) return;

  const res = await fetch("menu.html", { cache: "no-cache" });
  host.innerHTML = await res.text();

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("dropdown-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
    toggle.textContent = isVisible ? "✚" : "✕";

    document.documentElement.classList.toggle("menu-open", !isVisible);
    document.body.classList.toggle("menu-open", !isVisible);

    if (!isVisible) menu.scrollTop = 0;
  });
}

window.addEventListener("DOMContentLoaded", loadMenu);

