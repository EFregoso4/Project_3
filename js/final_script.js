// script.js

// Function to initialize the image slider
function initSlider() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider img');
  const totalImages = images.length;

  // Initially, hide all images except the first one
  images[currentIndex].style.display = 'block';
  for (let i = 1; i < totalImages; i++) {
    images[i].style.display = 'none';
  }

  // Function to change the image
  function changeImage() {
    images[currentIndex].style.display = 'none'; // Hide the current image
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image after the last one
    images[currentIndex].style.display = 'block'; // Show the next image
  }

  // Set the interval for automatic image change (3 seconds)
  setInterval(changeImage, 3000);
}

// Initialize the slider after the page loads
window.onload = initSlider;
