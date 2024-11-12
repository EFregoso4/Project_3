// script.js

// Function to initialize the image slider
function initSlider() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider img');
  const totalImages = images.length;

  // Show the first image and hide others
  images[currentIndex].style.display = 'block';
  for (let i = 1; i < totalImages; i++) {
    images[i].style.display = 'none';
  }

  // Function to change the image
  function changeImage() {
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex + 1) % totalImages; // Loop to the first image after the last
    images[currentIndex].style.display = 'block'; // Show next image
  }

  // Set the interval for automatic image change (3 seconds)
  setInterval(changeImage, 3000);
}

// Run the slider initialization when the page is loaded
window.onload = initSlider;
