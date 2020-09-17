import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  // 1:14:13
  //  useEffect = runs a piece of code, based on a given condition
  useEffect(()=>{
    // the code inside here will run once when the component loads and not again
    // async is send a request, wait for it, do something with import
    // the difference a map function with forEach can u check it out in 1:19:00
    const getCountriesData = async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=> response.json())
        .then((data)=>{
          const countries = data.map((country)=>({
            name: country.country, // united states, united kingdom
            value: country.countryInfo.iso2 // UK, USA, FR
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async(event)=>{
    const countryCode = event.target.value;
    // console.log(countryCode);
    setCountry(countryCode);
  }
  return (
    <div className="App">
      <div className="app__header">
        <h1> COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map( country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">

      </div>
    </div>
  );
}

export default App;
