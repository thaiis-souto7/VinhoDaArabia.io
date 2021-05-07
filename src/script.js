let time = 2000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#sliderBanner img"),
  max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) 
      currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");

  console.log(images);
}

function start() {
  setInterval(() => {
    //  troca de image
    nextImage();
  }, time);
}

window.addEventListener("load", start);

