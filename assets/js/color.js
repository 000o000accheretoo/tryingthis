// Function to smoothly transition between two colors
function transitionColors() {
    var body = document.querySelector('.body');
    var startColor = '#4b0000';
    var endColor = 'red';
    var duration = 5000; // Duration of transition in milliseconds

    var startTime = performance.now();
    var endTime = startTime + duration;

    function updateColor() {
        var currentTime = performance.now();
        var elapsed = currentTime - startTime;
        var progress = elapsed / duration;

        if (progress >= 1) {
            // Stop the transition when progress reaches 100%
            body.style.backgroundColor = endColor;
            return;
        }

        // Interpolate between startColor and endColor using lerp
        var interpolatedColor = lerpColor(startColor, endColor, progress);
        body.style.backgroundColor = interpolatedColor;

        // Continue updating color
        requestAnimationFrame(updateColor);
    }

    updateColor();
}

// Linear interpolation function for colors
function lerpColor(start, end, progress) {
    var startColor = parseColor(start);
    var endColor = parseColor(end);

    var r = startColor.r + (endColor.r - startColor.r) * progress;
    var g = startColor.g + (endColor.g - startColor.g) * progress;
    var b = startColor.b + (endColor.b - startColor.b) * progress;

    return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

// Helper function to parse color string into RGB components
function parseColor(color) {
    var hex = color.slice(1); // Remove #
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r: r, g: g, b: b };
}

// Start the color transition when the page loads
window.onload = function() {
    transitionColors();
};
