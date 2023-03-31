import './App.css';
import Search from './components/search/Search'; //search 
import CurrentWeather from './components/current-weather/current-weather'; //current weather
import { Weather_API_URL, Weather_API_KEY } from './api';
import { useState } from 'react';

const  App = ()=> {

  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();

  const handleOnSearchChange = (searchData) =>{
    
   const[ lat, lon] = searchData.value.split("");

  const currentWeatherFetch = fetch(`${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`);

  const forecastFetch = fetch(`${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`)

  Promise.all([ currentWeatherFetch, forecastFetch])
  .then( async (responce)=>{
    const weatherResponce = await responce[0].json();
    const forecastResponce = await responce[1].json();

    setCurrentWeather({ city : searchData.label , ...weatherResponce});
    setForecast({ city : searchData.label , ...forecastResponce });

  })
  .catch((err) => console.log(err))

  console.log(currentWeather);
  console.log(forecast);

  }
  return (
    <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        { currentWeather && <CurrentWeather data={currentWeather}/> }
    </div>
  );
}

export default App;
