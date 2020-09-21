import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import LineGraph from './LineGraph';
import './App.css';
import { sortData } from './util';
import "leaflet/dist/leaflet.css";
import { prettyPrintStart } from './util';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  const [casesType, setCasesType] = useState("cases"); //3:59:18
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
          const sortedData = sortData(data);
          //console.log(data);
          setCountries(countries);
          //setTableData(data);
          setTableData(sortedData);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response=> response.json())
      .then(data => {
        setCountryInfo(data);
      }) // at lest 2:13:33 <-- check it out. position end at here
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
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
// isRed is passing in table.js
//  console.log("country info", countryInfo);
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
          <InfoBox
            isRed
            onClick={ e => setCasesType("cases") }
            active={casesType === "cases" }

            title="Coronavirus Cases"
            cases={prettyPrintStart(countryInfo.todayCases)}
            total={prettyPrintStart(countryInfo.cases) }
          />
          <InfoBox
            onClick={ e => setCasesType("recovered") }
            active={casesType === "recovered" }

            title="Recovered"
            cases={prettyPrintStart(countryInfo.todayRecovered)}
            total={prettyPrintStart(countryInfo.recovered)}
          />
          <InfoBox
            isRed
            onClick={ e => setCasesType("deaths") }
            active={casesType === "deaths" }

            title="Deaths"
            cases={prettyPrintStart(countryInfo.todayDeaths)}
            total={prettyPrintStart(countryInfo.deaths)}
          />
        </div>
        {/* Map*/}
        <Map
          countries={mapCountries} center={mapCenter}
          zoom={mapZoom} casesType={casesType}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3 className="app__graphTitle">Worldwide new {casesType} </h3>
          <LineGraph className="app__graph" casesType={casesType} />
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
