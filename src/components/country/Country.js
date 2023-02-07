import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SoloCountry from '../solocountry/SoloCountry';

const Country = () => {
  const { country } = useParams();

  const countries = useSelector((state) => state.data);

  const selectedCountry = [...countries].filter((el) => el.name.common === country);

  // eslint-disable-next-line no-console
  console.log(selectedCountry, 'from country');

  return (
    <div>
      { selectedCountry.map((el) => (
        <div key={el.name}>
          <SoloCountry
            flag={el.flags}
            population={el.population}
            capital={el.capital}
            name={el.name.common}
            region={el.subregion}
            area={el.area}
          />
        </div>
      ))}
    </div>
  );
};

export default Country;
