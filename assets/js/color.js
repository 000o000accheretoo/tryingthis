// Function to smoothly transition between two colors
function transitionColors() {
    var body = document.querySelector('body');
    var duration = 5000; // Duration of transition in milliseconds

    // Add the class to change background color
    body.classList.add('red-background');

    // Remove the class after the transition duration
    setTimeout(function() {
        body.classList.remove('red-background');
    }, duration);
}

// Start the color transition when the page loads
window.onload = function() {
    transitionColors();
};
