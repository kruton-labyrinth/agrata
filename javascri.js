const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");

let index = 0;
let interval = setInterval(runSlideShow, 5000);

function runSlideShow() {
  index++;
  if (index > slideImages.length - 1) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 500}px)`;
}