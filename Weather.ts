(() => {
    // API Key and Base URL for OpenWeather API
    const apiKey: string = '71fdeb39a90b8678bfac0862dcad07b8';  // Replace this with your actual API key
    const baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

    // Get the city from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    // Get DOM elements for displaying weather data
    const cityName = document.getElementById('cityName') as HTMLHeadingElement | null;
    const description = document.getElementById('description') as HTMLParagraphElement | null;
    const temperature = document.getElementById('temperature') as HTMLParagraphElement | null;
    const humidity = document.getElementById('humidity') as HTMLParagraphElement | null;
    const weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement | null;

    // If a city is provided in the URL, fetch the weather data
    if (city) {
        getWeatherData(city);
    } else {
        alert('No city specified. Please enter a city in the URL.');
    }

    // Fetch weather data from OpenWeather API
    async function getWeatherData(city: string) {
        try {
            // Build the API URL with the city and API key
            const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            // Check if the city is valid or not found
            if (data.cod !== 200) {
                alert('City not found. Please try again.');
                return;
            }

            // Display the weather data in the DOM
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.');
        }
    }

    // Function to display weather data in the DOM
    function displayWeather(data: any) {
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
    }
})();
