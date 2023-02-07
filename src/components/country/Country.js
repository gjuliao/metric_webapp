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

  return (
    <div>
      <SoloCountry />
    </div>
  );
};

export default Country;
