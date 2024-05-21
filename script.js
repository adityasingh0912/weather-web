async function fetchWeather() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '7e2ffc142fmsha838d7643a0ce98p18b774jsndf67bafb0eec',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchWeather();