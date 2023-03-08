import React, { useState } from "react";

const citiesDataBase = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
];

const App = () => {
  const [cities, setCities] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  const queryCities = (query) => {
    if(query.length === 0) {
      setCities([]);
      return;
    }
    const filteredCities = citiesDataBase.filter((city) => {
      return city.toLowerCase().includes(query.toLowerCase());
    });
    setCities(filteredCities);
  }

  const renderCities = () => {
    return cities.map((city) => {
      return <li key={city}>{city}</li>;
    });
  }

  const onInputChange = (event) => {
    if(timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    const timeout = setTimeout(() => queryCities(event.target.value), 2000);
    setTimeoutId(timeout);
  }
  return (
    <div className="App">
      <h1>React Debouncing</h1>
      <input onChange={onInputChange} ></input>
      <ul>{renderCities()}</ul>
    </div>
  );
}

export default App;
