var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener('DOMContentLoaded', function () {
    // Get the search button and city input elements from the DOM
    var searchBtn = document.getElementById('searchBtn');
    var cityInput = document.getElementById('cityInput');
    // Get DOM elements for displaying weather data
    var cityName = document.getElementById('cityName');
    var description = document.getElementById('description');
    var temperature = document.getElementById('temperature');
    var humidity = document.getElementById('humidity');
    var weatherInfo = document.getElementById('weatherInfo');
    // Add a click event listener to the search button
    searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', function () {
        console.log("Button clicked!"); // Log when button is clicked
        // Get the city input value and trim any extra spaces
        var city = cityInput === null || cityInput === void 0 ? void 0 : cityInput.value.trim();
        if (city) {
            // Fetch and display weather data for the entered city
            getWeatherData(city);
        }
        else {
            // Show an alert if no city is entered
            alert('Please enter a city name.');
        }
    });
    // Fetch weather data from OpenWeather API
    function getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function () {
            var apiKey, baseUrl, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiKey = '71fdeb39a90b8678bfac0862dcad07b8';
                        baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(baseUrl, "?q=").concat(city, "&appid=").concat(apiKey, "&units=metric"))];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        // Check if the city is valid or not found
                        if (data.cod !== 200) {
                            alert('City not found. Please try again.');
                            return [2 /*return*/];
                        }
                        // Display the weather data in the DOM
                        if (cityName && description && temperature && humidity && weatherInfo) {
                            cityName.innerText = "Weather in ".concat(data.name);
                            temperature.innerText = "Temperature: ".concat(data.main.temp, "\u00B0C");
                            description.innerText = "Description: ".concat(data.weather[0].description);
                            humidity.innerText = "Humidity: ".concat(data.main.humidity, "%");
                            // Show the weather information
                            weatherInfo.style.display = 'block';
                        }
                        else {
                            console.error("One or more DOM elements are missing.");
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error fetching weather data:', error_1);
                        alert('Error fetching weather data.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
});
