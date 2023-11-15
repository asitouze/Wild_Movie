
const plus = document.querySelector(".display-right")
const moins =document.querySelector(".display-left")

let slideIndex = 1;
showDivs(slideIndex);

const plusDivs = (n) => {
  showDivs(slideIndex += n);
}

moins.addEventListener("click",() => {
  plusDivs(-1)
})

plus.addEventListener("click", () => {
  plusDivs(1)
})

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

