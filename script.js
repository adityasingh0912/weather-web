async function fetchWeather() {
    const city = document.getElementById('city').value || 'Delhi';
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '7e2ffc142fmsha838d7643a0ce98p18b774jsndf67bafb0eec',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    cloud_pct = result.cloud_pct;
    temp = result.temp;
    feels_like = result.feels_like;
    humidity = result.humidity;
    min_temp = result.min_temp;
    max_temp = result.max_temp;
    wind_speed = result.wind_speed;
    wind_degrees = result.wind_degrees;
    sunrise = result.sunrise;
    sunset = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  
  document.getElementById('submit').addEventListener('click', fetchWeather);