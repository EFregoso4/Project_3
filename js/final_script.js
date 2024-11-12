document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider-img');
  const totalImages = images.length;

  function showNextImage() {
    images.forEach(image => image.style.display = 'none'); // Hide all images
    currentIndex = (currentIndex + 1) % totalImages; // Cycle through images
    images[currentIndex].style.display = 'block'; // Show next image
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds
});
