import './App.css';
import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import CountryData from './components/CountryData';

function App() {

  const [countries, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sortedCountries, setSortedCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => 
  {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setData(data);
        const sortedList = [...data].sort((a, b) => 
          sortOrder === 'ascending' ? a.name.common.localeCompare(b.name.common): b.name.common.localeCompare(a.name.common));
        setSortedCountry(sortedList);
    })
    .catch(err => console.error(err))
  }, [sortOrder]);

  const handleCountry = (countryName) => {
    const countryObject = countries.find(country => country.name.common === countryName);
    setSelected(countryObject);
  }

  const handleBackBtn = () => {
    setSelected(null);
  }

  return (
    <div className="App">
      <div>
        <input 
          type='text' 
          placeholder='Search...'
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={() => setSortOrder('ascending')}>Sort A-Z</button>
        <button onClick={() => setSortOrder('descending')}>Sort Z-A</button>
      </div>
      {
      selected ? 
        (<CountryData
          data={selected}
          onBack={handleBackBtn}
        />):
        (
          sortedCountries.filter(val => 
            (searchTerm === "") ? val : val.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((country, index) => 
              <Countries
                key={index}
                className={country.name.common}
                country={country.name.common}
                data={country}
                onSelect={handleCountry}
              />
          )
        )
      }
    </div>
  );
}

export default App;
