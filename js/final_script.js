// JavaScript for the Video Slider functionality
const videoSlider = document.getElementById('slider-video');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const videoList = [
  "https://www.youtube.com/embed/4QIZE708gJ4", // Video 1
  "https://www.youtube.com/embed/kPa7bsKwL-c", // Video 2
  "https://www.youtube.com/embed/RcWOWgy86o8"  // Video 3
];

let currentIndex = 0;

// Function to change video based on index
function updateVideo() {
  videoSlider.src = videoList[currentIndex];
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length; // Loop back to the last video
  updateVideo();
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videoList.length; // Loop back to the first video
  updateVideo();
});
