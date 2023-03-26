import './App.css';
import Search from './components/search/Search'; //search 
import CurrentWeather from './components/current-weather/current-weather'; //current weather

const  App = ()=> {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData)
  }
  return (
    <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather/>
    </div>
  );
}

export default App;
