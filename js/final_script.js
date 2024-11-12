document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider-img');
  const totalImages = images.length;

  function showNextImage() {
    // Hide all images
    images.forEach(image => image.style.display = 'none');
    
    // Show the current image
    currentIndex = (currentIndex + 1) % totalImages; // Wrap around using modulus
    images[currentIndex].style.display = 'block';
  }

  // Show the first image initially
  images[currentIndex].style.display = 'block';

  // Change the image every 3 seconds
  setInterval(showNextImage, 3000);
});
