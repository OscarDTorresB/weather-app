import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//Pop Ups Alerts
import Swal from "sweetalert2";
import withReactComponent from "sweetalert2-react-content";

//Modules
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import City from "../components/City.jsx";
import Footer from "../components/Footer";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { addCity } from "../actions/actions";

const MySwal = withReactComponent(Swal);

function App() {
  //Redux
  const cityList = useSelector((state) => state);
  const dispatch = useDispatch();

  function addCityToState(city) {
    dispatch(addCity(city));

    /* <---- POP UP Message ----> */
    MySwal.fire({
      position: "top-end",
      icon: "success",
      titleText: `${city.name} was added succesfully...`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    )
      .then((r) => r.json())
      .then((response) => {
        if (response.main !== undefined) {
          const city = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon,
          };

          cityList && cityList.filter((city) => city.id === response.id).length
            ? MySwal.fire({
                text: `${city.name} was already added on your list.`,
                padding: "0.75rem",
                showConfirmButton: false,
                timer: "2500",
              })
            : addCityToState(city);
        } else {
          MySwal.fire({
            icon: "error",
            text: `The city was not found.`,
            padding: "0.75rem",
            showConfirmButton: false,
            timer: "2500",
          });
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cityList.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <Router>
      <div className="flex flex-col h-screen" id="wholeContainer">
        <Route path="/weather-app" render={() => <Nav onSearch={onSearch} />} />
        <div className="flex-grow">
          <Route exact path="/weather-app" render={() => <Cards />} />
          <Route exact path="/weather-app/About" component={About} />
          <Route
            path="/weather-app/city/:cityId"
            render={({ match }) => (
              <City city={onFilter(match.params.cityId)} />
            )}
          />
        </div>
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
