document.addEventListener('DOMContentLoaded', () => {
    // Get the search button and city input elements from the DOM
    const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement | null;
    const cityInput = document.getElementById('cityInput') as HTMLInputElement | null;

    // Get DOM elements for displaying weather data
    const cityName = document.getElementById('cityName') as HTMLHeadingElement | null;
    const description = document.getElementById('description') as HTMLParagraphElement | null;
    const temperature = document.getElementById('temperature') as HTMLParagraphElement | null;
    const humidity = document.getElementById('humidity') as HTMLParagraphElement | null;
    const weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement | null;

    // Add a click event listener to the search button
    searchBtn?.addEventListener('click', () => {
        console.log("Button clicked!");  // Log when button is clicked

        // Get the city input value and trim any extra spaces
        const city = cityInput?.value.trim();

        if (city) {
            // Fetch and display weather data for the entered city
            getWeatherData(city);
        } else {
            // Show an alert if no city is entered
            alert('Please enter a city name.');
        }
    });

    // Fetch weather data from OpenWeather API
    async function getWeatherData(city: string) {
        const apiKey = '71fdeb39a90b8678bfac0862dcad07b8';  // Replace with your actual API key
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

        try {
            const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            // Check if the city is valid or not found
            if (data.cod !== 200) {
                alert('City not found. Please try again.');
                return;
            }

            // Display the weather data in the DOM
            if (cityName && description && temperature && humidity && weatherInfo) {
                cityName.innerText = `Weather in ${data.name}`;
                temperature.innerText = `Temperature: ${data.main.temp}°C`;
                description.innerText = `Description: ${data.weather[0].description}`;
                humidity.innerText = `Humidity: ${data.main.humidity}%`;

                // Show the weather information
                weatherInfo.style.display = 'block';
            } else {
                console.error("One or more DOM elements are missing.");
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        }
    }
});
