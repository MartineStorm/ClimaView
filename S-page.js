(function () {
    // Get the search button and city input elements from the DOM
    var searchBtn = document.getElementById('searchBtn');
    var cityInput = document.getElementById('cityInput');
    // Add a click event listener to the search button
    searchBtn.addEventListener('click', function () {
        // Get the city input value and trim any extra spaces
        var city = cityInput.value.trim();
        // Check if the input is not empty
        if (city) {
            // Redirect to Weather.html with the city name as a query parameter in the URL
            window.location.href = "Weather.html?city=".concat(encodeURIComponent(city));
        }
        else {
            // Show an alert if no city is entered
            alert('Please enter a city name.');
        }
    });
})();
