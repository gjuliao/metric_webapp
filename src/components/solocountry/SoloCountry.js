import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SoloCountry = ({
  name,
  population,
  flag,
  capital,
}) => (
  <div className="solo_card">
    <h2>{name}</h2>
    <div className="body_card">
      <div className="flag_leftside">
        <img src={flag.png} alt="flag" />
        <div>
          <h3>Flag Meaning</h3>
          {' '}
          {' '}
          <p>
            {flag.alt ? flag.alt : 'Appologies.  The information about this flag is currently unavailable.  We are working hard to avoid empty spaces in the API.'}
          </p>
        </div>
      </div>
      <div className="flag_rightside">
        <div className="population">
          <h4>Population:</h4>
          <p>
            {' '}
            {' '}
            {population}
          </p>
        </div>
        <div className="population">
          <h4>Capital:</h4>
          <p>
            {' '}
            {' '}
            {capital}
          </p>
        </div>
      </div>
    </div>
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
