// script.js

// Array of image URLs
const images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg", "./images/img6.jpg", "./images/img7.jpg", "./images/img8.jpg", "./images/img9.jpg", "./images/img10.jpg", "./images/img11.jpg", "./images/img12.jpg", "./images/img13.jpg", "./images/img14.jpg", "./images/img15.jpg", "./images/img16.jpg", "./images/img18.jpg", "./images/img19.jpg", "./images/img20.jpg", "./images/img21.jpg", "./images/img22.jpg", "./images/img23.jpg", "./images/img24.jpg", "./images/img25.jpg", "./images/img26.jpg", "./images/img3.jpg", "./images/img27.jpg", "./images/img28.jpg", "./images/img29.jpg", "./images/img30.jpg","./images/img31.jpg","./images/img32.jpg"];

const imageContainer = document.querySelector('.image-container');
const startButton = document.getElementById('startButton');
let index = 0;

function animateImage() {
  if (index >= images.length) {
    // Display the message after all images are shown
    const message = document.createElement('p');
    message.textContent = "Thank you babe, you have seen all memories!";
    message.style.fontSize = '24px';
    message.style.color = 'white';
    message.style.fontWeight = 'bold';
    message.style.position = 'absolute';
    message.style.bottom = '100px';  // Position it below the button
    message.style.textAlign = 'center';
    message.style.width = '100%';
    imageContainer.appendChild(message);

    // Create the "Rewatch" button
    const rewatchButton = document.createElement('button');
    rewatchButton.textContent = 'Replay';
    rewatchButton.style.position = 'absolute';
    rewatchButton.style.bottom = '10px'; // Position it below the thank-you message
    rewatchButton.style.padding = '10px 20px';
    rewatchButton.style.fontSize = '18px';
    rewatchButton.style.backgroundColor = '#28a745';
    rewatchButton.style.color = 'white';
    rewatchButton.style.border = 'none';
    rewatchButton.style.borderRadius = '5px';
    rewatchButton.style.cursor = 'pointer';
    rewatchButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    rewatchButton.addEventListener('click', () => {
      // Reset everything to the initial state
      index = 0;
      imageContainer.innerHTML = ''; // Clear images and message
      message.remove(); // Remove the message
      rewatchButton.remove(); // Remove the rewatch button
      startButton.style.display = 'block'; // Show the start button again
    });

    imageContainer.appendChild(rewatchButton);
    startButton.style.display = 'none'; // Hide the start button after all images are shown

    return; // Stop the animation when all images are shown
  }

  // Clear the image container for the next image
  imageContainer.innerHTML = '';

  // Create a new image element
  const img = document.createElement('img');
  img.src = images[index];
  img.style.bottom = '0'; // Start from the bottom
  img.style.left = '0'; // Start from the left
  img.style.fontSize = '300px'
  img.style.opacity = '0'; // Start with 0 opacity
  img.style.transition = 'opacity 1s ease , transform 12s ease';
  img.style.width = '400px'; // Set the width
  img.style.height = '500px'
  img.style.backgroundSize = 'cover'
  img.style.border = '5px solid #007bff'; // Add a border
  img.style.borderRadius = '10px'; // Round the corners
  img.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.5)';
  imageContainer.appendChild(img);

  // Apply animation after a short delay
  setTimeout(() => {
    img.style.opacity = '1'; // Fade in
    img.style.transform = `translate(${window.innerWidth}px, -${window.innerHeight}px)`; // Animate the movement
  }, 50);

  // Increment index to prepare for the next image
  index++;
}

startButton.addEventListener('click', () => {
  if (index < images.length) {
    animateImage(); // Show the next image when clicked
  } else {
    // If all images are shown, show the message
    const message = document.createElement('p');
    message.textContent = "Thank you babe, you have seen all memories!";
    message.style.fontSize = '24px';
    message.style.color = '#007bff';
    message.style.fontWeight = 'bold';
    message.style.position = 'relative';
    message.style.marginLeft = "10px"
    message.style.bottom = '100px'; // Position it below the button
    message.style.textAlign = 'center';
    message.style.width = '100%';
    imageContainer.appendChild(message);

    // Create the "Rewatch" button
    const rewatchButton = document.createElement('button');
    rewatchButton.textContent = 'Replay';
    rewatchButton.style.position = 'relative';
    rewatchButton.style.bottom = '50px'; // Position it below the thank-you message
    rewatchButton.style.marginBottom = '50px';
    rewatchButton.style.marginLeft = '60px';
    rewatchButton.style.padding = '10px 20px';
    rewatchButton.style.fontSize = '18px';
    rewatchButton.style.backgroundColor = '#28a745';
    rewatchButton.style.color = 'white';
    rewatchButton.style.border = 'none';
    rewatchButton.style.borderRadius = '5px';
    rewatchButton.style.cursor = 'pointer';
    rewatchButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    rewatchButton.addEventListener('click', () => {
      // Reset everything to the initial state
      index = 0;
      imageContainer.innerHTML = ''; // Clear images and message
      message.remove(); // Remove the message
      rewatchButton.remove(); // Remove the rewatch button
      startButton.style.display = 'block'; // Show the start button again
    });

    imageContainer.appendChild(rewatchButton);
    startButton.style.display = 'none'; // Hide the start button after all images are shown
  }
});



// Handle the Music Button Click Event

const musicButton = document.getElementById('musicButton');
const audioElement = document.getElementById('backgroundMusic');
musicButton.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
    musicButton.textContent = 'Pause Music'; // Change button text to "Pause Music"
  } else {
    audioElement.pause();
    musicButton.textContent = 'Play Music'; // Change button text to "Play Music"
  }
});