import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City.jsx'
import Footer from '../components/Footer';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function addCity(city) {
    setCities(oldCities => [...oldCities, city]);
    alert(`${city.name} was added succesfully...`)
  }

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          cities && cities.filter(city => city.id === recurso.id).length ?
            alert("The city it's already added on you list.") :
            addCity(city);
        } else {
          alert("City not found...");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Route
        path='/weather-app'
        render={() => <Nav onSearch={onSearch}/>}
        />
        <div className='flex-grow'>
          <Route
          exact path='/weather-app'
          render={() => <Cards
          cities={cities}
          onClose={onClose}/>}
          />
          <Route
          exact path='/weather-app/About'
          component={About}/>
          <Route
          path='/weather-app/city/:cityId'
          render={({match}) => <City city={onFilter(match.params.cityId)}/>}
          />
        </div>
        <Route path='/' component={Footer} />
      </div>
    </Router>
  );
}

export default App;
