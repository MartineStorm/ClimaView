document.addEventListener('DOMContentLoaded', () => {
    // Get the search button and city input elements from the DOM
    const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
    const cityInput = document.getElementById('cityInput') as HTMLInputElement;

    if (!searchBtn || !cityInput) {
        console.error('DOM elements not found.');
        return;
    }

    // Add a click event listener to the search button
    searchBtn.addEventListener('click', () => {
        console.log("Button clicked!");  // Log when button is clicked

        // Get the city input value and trim any extra spaces
        const city = cityInput.value.trim();

        console.log("City entered:", city);  // Log the city name entered

        // Check if the input is not empty
        if (city) {
            // Redirect to Weather.html with the city name as a query parameter in the URL
            console.log(`Redirecting to Weather.html with city: ${city}`);  // Log redirection info
            window.location.href = `Weather.html?city=${encodeURIComponent(city)}`;
        } else {
            // Show an alert if no city is entered
            alert('Please enter a city name.');
        }
    });
});
