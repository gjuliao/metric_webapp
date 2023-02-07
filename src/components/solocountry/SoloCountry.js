import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const SoloCountry = ({
  name,
  population,
  flag,
  capital,
}) => (
  <div>
    <img src={flag.png} alt="flag" />
    <h2>{population}</h2>
    <h2>{name}</h2>
    <h2>{capital}</h2>
    <h2>{flag.alt ? flag.alt : 'Appologies.  The information about this flag is currently unavailable.  We are working hard to avoid empty spaces in the API.'}</h2>
  </div>
);

export default SoloCountry;

SoloCountry.defaultProps = {
  name: '',
  flag: '',
  population: 0,
  capital: '',
};

SoloCountry.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.objectOf(),
  population: PropTypes.number,
  capital: PropTypes.arrayOf(),
};
