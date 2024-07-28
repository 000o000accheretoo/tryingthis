document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'custom-btn'
    var buttons = document.querySelectorAll('.custom-btn');

    // Iterate over each button and add a click event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the URL from the data-url attribute
            var url = button.getAttribute('data-url');

            // Check if URL is not null or empty
            if (url) {
                // Redirect the browser to the specified URL
                window.location.href = url;
            }
        });
    });
});
