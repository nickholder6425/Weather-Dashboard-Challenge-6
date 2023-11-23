import { fetchWeatherData } from './weatherService.js';
import { updateUI } from './ui.js';

// Replace {lat}, {lon}, and {API key} with actual coordinates and API key
const baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

// Fetch weather data
fetchWeatherData(baseURL)
  .then(data => {
    // Update UI with weather data
    updateUI(data);
  })
  .catch(error => {
    console.log("Error fetching weather data:", error);
  });
