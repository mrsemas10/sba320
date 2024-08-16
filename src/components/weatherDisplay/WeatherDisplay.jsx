import React from 'react';
import './weather.css';

export default function WeatherDisplay({ location, currentTemp, image }) {
  const loaded = () => {
    return (
      <>
        <img src={image.condition.icon} alt="weather icon" width="50%"/>
        <h1>{currentTemp.temp_f} °F</h1><br></br>
        <p>{location.name}</p>  
      </>
    )
  }

  const loading = () => {
    return <h1>Location doesn't exist</h1>
  }

  return location && currentTemp ? loaded() : loading();
}