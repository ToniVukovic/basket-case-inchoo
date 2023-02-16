let menu = document.getElementById("menu");
let tipka = document.getElementById("tipka");

function toggleOpen() {
  menu.classList.toggle("open");
  tipka.classList.toggle("active");
}

window.onclick = function (e) {
  if (!e.target.matches(".menu-opener")) {
    if (menu.classList.contains("open") && tipka.classList.contains("active")) {
      menu.classList.remove("open");
      tipka.classList.remove("active");
    }
  }
};
