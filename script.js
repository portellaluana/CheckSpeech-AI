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
