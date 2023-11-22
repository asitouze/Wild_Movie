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