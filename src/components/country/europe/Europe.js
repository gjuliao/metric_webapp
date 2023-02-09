import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import map from './map_europe.png';
import Home from '../../home/Home';

const Europe = () => {
  const countries = useSelector((state) => state.data);
  return (
    <>
      <div className="text-white europe_container">
        <img className="europe_map" src={map} alt="Map" />
        <div className="map_text">
          <div>
            <h3 className="europe">
              {countries.length}
              {' '}
              COUNTRIES IN EUROPE.
            </h3>
          </div>
          <a className="know_more" href="/europe">
            <div>Click here to know more</div>
          </a>
        </div>
      </div>
      <Home />
    </>
  );
};

export default Europe;
