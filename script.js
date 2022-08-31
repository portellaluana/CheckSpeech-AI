const btnCookie = document.querySelector(".btn-cookies");
const containerCookie = document.querySelector(".container-cookies");

btnCookie.addEventListener("click", function () {
  containerCookie.style.display = "none";
});

setTimeout(() => {
  containerCookie.style.display = "flex";
}, 500);

let left = 2;
let right = 6;

function sliderClientes() {
  for (i = left; i <= right; i++)
    document.getElementById("cliente" + i).style.display = "inline-block";
}

function moveLeft() {
  if (left <= 3 && right <= 7) {
    document.getElementById("cliente" + left).style.display = "none";
    left += 1;
    right += 1;

    for (i = left; i <= right; i++) {
      document.getElementById("cliente" + i).style.display = "inline-block";
    }
  } else return;
}

function moveRight() {
  if (left >= 2 && right >= 6) {
    document.getElementById("cliente" + right).style.display = "none";
    left -= 1;
    right -= 1;

    for (i = left; i <= right; i++) {
      document.getElementById("cliente" + i).style.display = "inline-block";
    }
  } else return;
}

sliderClientes();

const navHeader = document.querySelector(".container-nav");
const scrollingNav = "50";
const navFixed = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > scrollingNav) {
    navHeader.style.backgroundColor = "var(--brand-dark)";
    navFixed.style.borderBottom = "none";
  } else {
    navHeader.style.backgroundColor = "transparent";
    navFixed.style.borderBottom = "solid 0.5px var(--brand-grey-line)";
  }
});

function menuShow() {
  const navHeader = document.querySelector(".container-nav");
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon-menu").src = "assets/menu-close.png";
    navHeader.style.backgroundColor = "transparent";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon-menu").src = "assets/menu-open.png";
    navHeader.style.backgroundColor = "var(--brand-dark)";
  }

  menuMobile.addEventListener("click", function () {
    menuMobile.classList.remove("open");
    document.querySelector(".icon-menu").src = "assets/menu-close.png";
  });
}

let radioBtn = document.getElementById("concordo");
let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");

function inputsPreenchidos() {
  return inputNome.value.length >= 1 && inputEmail.value.length >= 1;
}

function checkRequired() {
  radioBtn.disabled = !inputsPreenchidos();
}

function habilitar() {
  let botaoEnviar = document.querySelector(".btn-enviar");

  botaoEnviar.disabled = !radioBtn.checked;
}
