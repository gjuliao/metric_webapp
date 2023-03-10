import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import './index.css';

const SoloCountry = ({
  name,
  population,
  flag,
  capital,
  region,
  area,
}) => (
  <div className="solo_card">
    <Link className="arrow_left" to="/home">
      <FaArrowLeft />
    </Link>
    <h2>{name}</h2>
    <div className="body_card">
      <div className="flag_leftside">
        <img src={flag.png} alt="flag" />
        <div className="flag_meaning">
          <h3>Flag Meaning</h3>
          {' '}
          {' '}
          <p>
            {flag.alt ? flag.alt : 'Appologies.  The information about this flag is currently unavailable.  We are working hard to avoid empty spaces in the API.'}
          </p>
        </div>
      </div>
      <div className="flag_rightside">
        <table className="table_row">
          <tr>
            <th>COUNTRY BREAKDOWN</th>
          </tr>
          <tr className="table_name">
            <td>POPULATION</td>
            <td>{population}</td>
          </tr>
          <tr className="table_name">
            <td>CAPITAL</td>
            <td>{capital}</td>
          </tr>
          <tr className="table_name">
            <td>REGION</td>
            <td>{region}</td>
          </tr>
          <tr>
            <td className="table_name area">AREA</td>
            <td className="area">{area}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default SoloCountry;

SoloCountry.defaultProps = {
  name: '',
  flag: '',
  population: 0,
  area: 0,
  capital: '',
  region: '',
};

SoloCountry.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.objectOf(),
  population: PropTypes.number,
  area: PropTypes.number,
  capital: PropTypes.arrayOf(),
  region: PropTypes.string,
};
