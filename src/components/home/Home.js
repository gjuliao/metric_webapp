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
          <CountryCard key={country.population} country={country} />
          ,
        </>
      )) }
    </div>
  );
};

export default Home;
