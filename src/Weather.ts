const apiKey: string = 'YOUR_API_KEY';
const baseUrl: string = ''

const searchBtn = document.getElementById('searchBtn') as HTMLButtonElement;
const cityInput = document.getElementById('cityInput') as HTMLButtonElement;
const cityName = document.getElementById('cityName') as HTMLButtonElement;
const temperature = document.getElementById('temperature') as HTMLButtonElement;
const humidity = document.getElementById('humidity') as HTMLButtonElement;
const weatherInfo = document.getElementById('weatherInfo') as HTMLButtonElement;

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

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

function displayWeather(data: any) {
    cityName.innerText = `Weather in ${data.name}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    description.innerText = `Description: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    
    weatherInfo.style.display = 'block';
}