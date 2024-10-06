(() => {
    // Get the search button and city input elements from the DOM
    const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
    const cityInput = document.getElementById('cityInput') as HTMLInputElement;

    // Add a click event listener to the search button
    searchBtn.addEventListener('click', () => {
        // Get the city input value and trim any extra spaces
        const city = cityInput.value.trim();

        // Check if the input is not empty
        if (city) {
            // Redirect to Weather.html with the city name as a query parameter in the URL
            window.location.href = `Weather.html?city=${encodeURIComponent(city)}`;
        } else {
            // Show an alert if no city is entered
            alert('Please enter a city name.');
        }
    });
})();
