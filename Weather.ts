const apiKey: string = 'YOUR_API_KEY';
const baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather'; // Assuming OpenWeather API URL

// Get DOM elements with appropriate types
const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
const cityInput = document.getElementById('cityInput') as HTMLInputElement;  // Corrected to HTMLInputElement
const cityName = document.getElementById('cityName') as HTMLHeadingElement;  // Assuming it's an <h2> or <h3>
const description = document.getElementById('description') as HTMLParagraphElement | null;
const temperature = document.getElementById('temperature') as HTMLParagraphElement; // Corrected to HTMLParagraphElement
const humidity = document.getElementById('humidity') as HTMLParagraphElement;  // Corrected to HTMLParagraphElement
const weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement;  // Assuming this is a <div>

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

// Fetch weather data from OpenWeather API
async function getWeatherData(city: string) {
    try {
        const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display weather data in HTML
function displayWeather(data: any) {
    if (cityName && temperature && description && humidity && weatherInfo) {
        cityName.innerText = `Weather in ${data.name}`;
        temperature.innerText = `Temperature: ${data.main.temp}°C`;
        description.innerText = `Description: ${data.weather[0].description}`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        
        weatherInfo.style.display = 'block';
    } else {
        console.error("One or more elements are missing in the DOM.");
    }
}
