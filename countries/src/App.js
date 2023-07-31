import React, { useState, useEffect } from 'react';
import { FindCountries, Countries, CountryInfo } from './components/components';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterInput, setFilterFormText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  //fetch JSON data from https://restcountries.com/v3.1/all
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  let show_Countries_Or_CountyInfo;

  if (selectedCountry) {
    show_Countries_Or_CountyInfo = <CountryInfo country={selectedCountry} />;
  } else {
    show_Countries_Or_CountyInfo = <Countries countries={countries} filterInput={filterInput} onShowButtonClick={setSelectedCountry}/>;
}

const handleFilterInputChange = (event) => {
  setFilterFormText(event.target.value);
  setSelectedCountry(null);
};

  return (
    <div>
      <FindCountries
        filterInput={filterInput}
        handleFilterInputChange={handleFilterInputChange}
      />

      {show_Countries_Or_CountyInfo}
    </div>
  );
};

export default App;