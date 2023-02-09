import React, { useState } from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import CountryCard from '../countrycard/CountryCard';

const Home = () => {
  const countries = useSelector((state) => state.data);

  const [query, setQuery] = useState('');

  return (
    <div data-testid="header" className="home">
      <h6>
        Search stats by country.
      </h6>
      <form>
        <input placeholder="Search your country here..." type="search" value={query.query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <div className="country_section">
        { countries.filter((el) => (
          (query === '' ? el : el.name.common.toLowerCase().includes(query.toLowerCase()))
        )).map((country) => (
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
