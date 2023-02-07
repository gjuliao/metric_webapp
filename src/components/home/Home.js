import React from 'react';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import CountryCard from '../countrycard/CountryCard';

const Home = () => {
  const countries = useSelector((state) => state.data);
  return (
    <div className="home">
      { countries.map((country) => (
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
