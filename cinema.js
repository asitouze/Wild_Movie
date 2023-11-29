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

// Pour menu burger

// Ajoute un écouteur d'événements "click" à l'élément avec la classe "icons"
icons.addEventListener("click", () => {
  // Change la classe "active" de l'élément avec le nom de variable "nav" quand on clic dessus
  nav.classList.toggle("active");
})

// Sélectionne tous les éléments "li" à l'intérieur d'un élément "nav" dans links
const links = document.querySelectorAll("nav li")

// Ajoute un écouteur d'événements "click" à chaque élément "li" sélectionné que l'on nomme link
links.forEach((link) => {
  // Quand on clique sur "li", on supprime la classe "active" de l'élément avec le nom de variable "nav"
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  })
})