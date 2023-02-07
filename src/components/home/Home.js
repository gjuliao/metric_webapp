import React, { useState } from 'react';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import CountryCard from '../countrycard/CountryCard';

const Home = () => {
  const [query, setQuery] = useState({
    query: '',
    list: [],
  });

  const countries = useSelector((state) => state.data);

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
  // eslint-disable-next-line no-console
  console.log(query.list, 'from query');
  return (
    <div className="home">
      <form>
        <input type="search" value={query.query} onChange={handleChange} />
      </form>
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
  );
};

export default Home;
