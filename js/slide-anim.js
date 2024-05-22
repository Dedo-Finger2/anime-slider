const images = document.querySelectorAll(".anime-cover-image");
const imageWidth = 0;

const updateImagePositions = (centerIndex) => {
  images.forEach((image, index) => {
    const distanceFromCenter = index - centerIndex;
    let height;
    let zIndex;

    switch (Math.abs(distanceFromCenter)) {
      case 0:
        height = 240;
        zIndex = 6;
        break;
      case 1:
        height = 220;
        zIndex = 5;
        break;
      case 2:
        height = 200;
        zIndex = 4;
        break;
      case 3:
        height = 180;
        zIndex = 3;
        break;
      case 4:
        height = 160;
        zIndex = 2;
        break;
      case 5:
        height = 140;
        zIndex = 1;
        break;
      default:
        height = 120; 
    }

    image.style.height = `${height}px`;
    image.style.zIndex = zIndex || 0; 
  });
};

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    const selectedImage = document.querySelector(".anime-cover-selected");
    selectedImage.classList.remove("anime-cover-selected");
    image.classList.add("anime-cover-selected");
    updateImagePositions(index);
  });
});


const initialIndex = Array.from(images).findIndex(image => image.classList.contains('anime-cover-selected'));
updateImagePositions(initialIndex);
