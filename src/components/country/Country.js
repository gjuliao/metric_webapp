import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom';
import SoloCountry from '../solocountry/SoloCountry';

const Country = () => {
  const { country } = useParams();

  const countries = useSelector((state) => state.data);

  // eslint-disable-next-line no-unused-vars
  const selectedCountry = [...countries].filter((el) => el.name.common === country);

  // eslint-disable-next-line no-console
  console.log(selectedCountry);

  return (
    <div>
      { selectedCountry.map((el) => (
        <div key={el.name}>
          <SoloCountry
            flag={el.flags}
            population={el.population}
            capital={el.capital}
          />
        </div>
      ))}
    </div>
  );
};

export default Country;
