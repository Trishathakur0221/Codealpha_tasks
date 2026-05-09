const images = [
  "https://picsum.photos/id/101/800",
  "https://picsum.photos/id/102/800",
  "https://picsum.photos/id/103/800",
  "https://picsum.photos/id/104/800",
  "https://picsum.photos/id/106/800",
  "https://picsum.photos/id/107/800"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  showImage();
}

function showImage() {
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}