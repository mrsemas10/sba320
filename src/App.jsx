import React, { useEffect, useState } from 'react'
import './index.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import Form from './components/Form'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  //where i got the fetch data:
  // https://rapidapi.com/weatherapi/api/weatherapi-com/playground/apiendpoint_bef542ef-a177-4633-aacc-ee9703945037

  const fetchData = async (searchTerm) => {
    const apiKey = '2c8fcaff5cmshb30514913395c4fp10f062jsn47dbd8c865d9';
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2c8fcaff5cmshb30514913395c4fp10f062jsn47dbd8c865d9',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWeatherData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData('Columbus');
  }, []);


  return (

    <div className='app'>
      <Form onWeatherSearch={fetchData} />
      <br/><br/>
      {weatherData && (
        <WeatherDisplay
          location={weatherData.location}
          currentTemp={weatherData.current}
          image={weatherData.current}
        />
      )}

    </div>
  )
};
