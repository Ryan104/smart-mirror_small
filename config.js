// Getting API keys from the ignored apiKeys.js file

// Please visit openweathermap.org and obtain your own free api key
// Replace WEATHER_API_KEY with your key string and delete the import statement

import WEATHER_API_KEY from './apiKeys';

const getWeatherApiKey = () => WEATHER_API_KEY;

export { getWeatherApiKey };
