import React, { useState } from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import CountryCard from '../countrycard/CountryCard';

const Home = () => {
  const countries = useSelector((state) => state.data);

  const [query, setQuery] = useState({
    query: '',
    list: countries,
  });

  const handleChange = (e) => {
    const results = countries.filter((el) => {
      if (e.target.value === '') return countries;
      return el.name.common.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setQuery({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <div className="home">
      <h6>
        Europe has
        {' '}
        {countries.length}
        {' '}
        number of countries
        .
        Search the one you would like to know more of.
      </h6>
      <form name="input">
        <input placeholder="Search your country here..." type="search" value={query.query} onChange={(e) => handleChange(e)} />
      </form>
      <div className="country_section">
        { query.list.map((country) => (
          <div key={country.name.common} className="country">
            <CountryCard
              population={country.population}
              name={country.name.common}
              flags={country.flags}
            />
          </div>
        )) }
      </div>
    </div>
  );
};

export default Home;
