const fetchWeatherButton = document.getElementById('fetchWeather');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const precipitation = document.getElementById('precipitation');
const weatherIcon = document.getElementById('weather-icon');

fetchWeatherButton.addEventListener('click', () => {
  const cityInput = document.getElementById('city').value.trim();

  if (!cityInput) {
    alert('Please enter a city name.');
    return;
  }

  const apiKey = 'fa7882871e5f4d02ade120021252601'; // Replace with your WeatherAPI key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Unable to fetch weather`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Weather Data:', data);

      // Update weather information
      

      cityName.textContent = data.location.name;
      temperature.textContent = `${data.current.temp_c}°C`;
      weatherDescription.textContent = data.current.condition.text;
      temp.textContent = `${data.current.temp_f}`;
      humidity.textContent = `${data.current.humidity}%`;
      wind.textContent = `${data.current.wind_kph} kph`;
      precipitation.textContent = `${data.current.precip_in} in`;

      // Update weather icon
      const iconClass = getWeatherIconClass(data.current.condition.code);
      weatherIcon.className = `wi ${iconClass}`;
    })
    .catch(error => {
      console.error('WeatherAPI Error:', error);
      alert('Unable to fetch weather data. Please try again.');
    });
});

// Function to map WeatherAPI condition codes to Weather Icons classes
function getWeatherIconClass(code) {
  switch (code) {
    case 1000: return 'wi-day-sunny'; // Clear
    case 1003: return 'wi-day-cloudy'; // Partly cloudy
    case 1006: return 'wi-cloudy'; // Cloudy
    case 1009: return 'wi-cloudy'; // Overcast
    case 1030: return 'wi-fog'; // Mist
    case 1063: return 'wi-showers'; // Patchy rain
    case 1066: return 'wi-snow'; // Patchy snow
    case 1069: return 'wi-sleet'; // Sleet
    case 1072: return 'wi-sleet'; // Freezing drizzle
    case 1087: return 'wi-thunderstorm'; // Thundery outbreaks
    case 1114: return 'wi-snow-wind'; // Blowing snow
    case 1117: return 'wi-snow-wind'; // Blizzard
    case 1135: return 'wi-fog'; // Fog
    case 1147: return 'wi-fog'; // Freezing fog
    case 1150: return 'wi-showers'; // Patchy light drizzle
    case 1153: return 'wi-showers'; // Light drizzle
    case 1168: return 'wi-sleet'; // Freezing drizzle
    case 1171: return 'wi-sleet'; // Heavy freezing drizzle
    case 1180: return 'wi-showers'; // Patchy light rain
    case 1183: return 'wi-showers'; // Light rain
    case 1186: return 'wi-rain'; // Moderate rain
    case 1189: return 'wi-rain'; // Heavy rain
    case 1192: return 'wi-rain'; // Torrential rain
    case 1195: return 'wi-rain'; // Heavy rain
    case 1198: return 'wi-sleet'; // Light freezing rain
    case 1201: return 'wi-sleet'; // Moderate or heavy freezing rain
    case 1204: return 'wi-sleet'; // Light sleet
    case 1207: return 'wi-sleet'; // Moderate or heavy sleet
    case 1210: return 'wi-snow'; // Patchy light snow
    case 1213: return 'wi-snow'; // Light snow
    case 1216: return 'wi-snow'; // Moderate snow
    case 1219: return 'wi-snow'; // Heavy snow
    case 1222: return 'wi-snow'; // Ice pellets
    case 1225: return 'wi-snow'; // Light snow showers
    case 1237: return 'wi-snow'; // Moderate or heavy snow showers
    case 1240: return 'wi-showers'; // Light rain showers
    case 1243: return 'wi-showers'; // Moderate or heavy rain showers
    case 1246: return 'wi-rain'; // Torrential rain showers
    case 1249: return 'wi-sleet'; // Light sleet showers
    case 1252: return 'wi-sleet'; // Moderate or heavy sleet showers
    case 1255: return 'wi-snow'; // Light snow showers
    case 1258: return 'wi-snow'; // Moderate or heavy snow showers
    case 1261: return 'wi-snow'; // Light showers of ice pellets
    case 1264: return 'wi-snow'; // Moderate or heavy showers of ice pellets
    case 1273: return 'wi-thunderstorm'; // Patchy light rain with thunder
    case 1276: return 'wi-thunderstorm'; // Moderate or heavy rain with thunder
    case 1279: return 'wi-thunderstorm'; // Patchy light snow with thunder
    case 1282: return 'wi-thunderstorm'; // Moderate or heavy snow with thunder
    default: return 'wi-day-sunny'; // Default icon
  }
}