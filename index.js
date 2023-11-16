// Pour le premier slider

// On cible les élements
const plus = document.querySelector(".display-right")
const moins = document.querySelector(".display-left")

// Initialisation de la variable slideIndex à 1
let slideIndex = 1;
showDivs(slideIndex);

// Appelle la fonction showDivs et qui met à jour l'index de l'image de si on recule ou on avance
const plusDivs = (n) => {
  showDivs(slideIndex += n);
}

// Fait reculer l'index de l'image de 1
moins.addEventListener("click", () => {
  plusDivs(-1)
})

// Fait avancer l'index de l'image de 1
plus.addEventListener("click", () => {
  plusDivs(1)
})

// Fonction qui va cacher les images et montrer l'image qu'il faut selon des conditions tactiques et stratégique
function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}

// Fait ce que PlusDivs réalise toutes les 5 secondes
setInterval("plusDivs(1)", 5000);

// Pour le 2ème slider

// On cible les élements
const plus1 = document.querySelector(".display-right1")
const moins1 = document.querySelector(".display-left1")

// Initialisation de la variable slideIndex à 1
let slideIndex1 = 1;
showDivs1(slideIndex1);

// Appelle la fonction showDivs et qui met à jour l'index de l'image de si on recule ou on avance
const plusDivs1 = (n1) => {
  showDivs1(slideIndex1 += n1);
}

// Fait reculer l'index de l'image de 1
moins1.addEventListener("click", () => {
  plusDivs1(-1)
})

// Fait avancer l'index de l'image de 1
plus1.addEventListener("click", () => {
  plusDivs1(1)
})

// Fonction qui va cacher les images et montrer l'image qu'il faut selon des conditions tactiques et stratégique
function showDivs1(n1) {
  let i1;
  const x1 = document.getElementsByClassName("mySlides1");
  if (n1 > x1.length) {
    slideIndex1 = 1
  }
  if (n1 < 1) {
    slideIndex1 = x1.length
  }
  for (i1 = 0; i1 < x1.length; i1++) {
    x1[i1].style.display = "none";
  }
  x1[slideIndex1 - 1].style.display = "flex";
}

// Fait ce que PlusDivs réalise toutes les 5 secondes
setInterval("plusDivs1(1)", 5000);

