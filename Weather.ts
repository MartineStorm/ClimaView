(() => {
    const apiKey: string = 'YOUR_API_KEY';
    const baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

    // DOM elements
    const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
    const cityInput = document.getElementById('cityInput') as HTMLInputElement;
    const cityName = document.getElementById('cityName') as HTMLHeadingElement;
    const description = document.getElementById('description') as HTMLParagraphElement | null;
    const temperature = document.getElementById('temperature') as HTMLParagraphElement;
    const humidity = document.getElementById('humidity') as HTMLParagraphElement;
    const weatherInfo = document.getElementById('weatherInfo') as HTMLDivElement;

    // Event listener
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeatherData(city);
        }
    });

    // Fetch weather data
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

    // Display weather data
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
})();
