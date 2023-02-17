let menu = document.getElementById("menu");
let tipka = document.getElementById("tipka");
let gore = document.getElementById("up");
let lijevo = document.getElementById("left");

function toggleOpen() {
  menu.classList.toggle("open");
  tipka.classList.toggle("active");
  gore.classList.toggle("show");
  lijevo.classList.toggle("show-left");
}

window.onclick = function (e) {
  if (!e.target.matches(".menu-opener")) {
    if (menu.classList.contains("open") && tipka.classList.contains("active")) {
      menu.classList.remove("open");
      tipka.classList.remove("active");
      gore.classList.remove("show");
      lijevo.classList.remove("show-left");
    }
  }
};
