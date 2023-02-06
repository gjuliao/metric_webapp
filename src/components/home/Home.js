import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import CountryCard from '../countrycard/CountryCard';

const Home = () => {
  const countries = useSelector((state) => state.data);
  return (
    <div className="home">
      { countries.map((country) => (
        <>
          <CountryCard
            key={country.name}
            population={country.population}
            name={country.name.common}
            currency={country.currency}
            flags={country.flags}
          />
          ,
        </>
      )) }
    </div>
  );
};

export default Home;
