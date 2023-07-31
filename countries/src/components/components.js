export const FindCountries = (props) => {
    const { filterInput, handleFilterInputChange } = props;
  
    return (
      <form>
        <input value={filterInput} onChange={handleFilterInputChange} />
      </form>
    );
  };
  
  export const Countries = (props) => {
    const { countries, filterInput, onShowButtonClick } = props;
  
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterInput.toLowerCase())
    );
  
    if (filterInput.length === 0) {
      return null;
    } else if (filteredCountries.length > 1 && filteredCountries.length < 10) {
      return (
        <div>
          {filteredCountries.map((country, index) => (
            <CountryName
              key={index}
              country={country}
              onShowButtonClick={onShowButtonClick}
            />
          ))}
        </div>
      );
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          {filteredCountries.map((country, index) => (
            <div key={index}>
              <CountryInfo country={country} />
            </div>
          ))}
        </div>
      );
    } else {
      return <p>Please specify your search.</p>;
    }
  };
  
  
  export const CountryName = (props) => {
    const { country, onShowButtonClick } = props;
  
    const handleShowButtonClick = () => {
      onShowButtonClick(country);
    };
  
    return (
      <div>
        <p>
          {country.name.common} <button onClick={handleShowButtonClick}>Show</button>
        </p>
      </div>
    );
  };
  
  export const CountryInfo = (props) => {
    const { country } = props; 
  
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>
          Capital: {country.capital} <br></br>
          Area: {country.area}
        </p>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([languageCode, languageName]) => (
            <li key={languageCode}>{languageName}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} width="200" height="125" />
      </div>
    );
  };