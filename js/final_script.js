// Define an array with the YouTube video URLs you want to use in the slider
const videos = [
  "https://www.youtube.com/embed/4QIZE708gJ4",
  "https://www.youtube.com/embed/kPa7bsKwL-c",
  "https://www.youtube.com/embed/RcWOWgy86o8"
];
let currentVideoIndex = 0;

// Get the HTML elements for the slider
const sliderVideo = document.getElementById("slider-video");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the iframe src with the new video URL
function updateVideo() {
  sliderVideo.src = videos[currentVideoIndex];
}

// Function to show the previous video
function showPreviousVideo() {
  currentVideoIndex = (currentVideoIndex === 0) ? videos.length - 1 : currentVideoIndex - 1;
  updateVideo();
}

// Function to show the next video
function showNextVideo() {
  currentVideoIndex = (currentVideoIndex === videos.length - 1) ? 0 : currentVideoIndex + 1;
  updateVideo();
}

// Add event listeners to buttons
prevButton.addEventListener("click", showPreviousVideo);
nextButton.addEventListener("click", showNextVideo);
