// Module for fetching weather data
export async function fetchWeatherData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  