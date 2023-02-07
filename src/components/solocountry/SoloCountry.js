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
    <img src={flag} alt="flag" />
    <h2>{population}</h2>
    <h2>{name}</h2>
    <h2>{capital}</h2>
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
  flag: PropTypes.string,
  population: PropTypes.number,
  capital: PropTypes.string,
};
