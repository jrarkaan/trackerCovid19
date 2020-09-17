import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
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

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response=> response.json())
      .then(data => {
        setCountryInfo(data);
      }) // at lest 2:13:33 <--
  },[]);

  const onCountryChange = async(event)=>{
    const countryCode = event.target.value;
    // console.log(countryCode);
    setCountry(countryCode);
    const url = countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        // All of the data from the country response
        setCountryInfo(data);
      });
  };
  console.log("country info", countryInfo);
  return (
    <div className="App">
      <div className="app__left">
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
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        {/* Map*/}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table*/}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
