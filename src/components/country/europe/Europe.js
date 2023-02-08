import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import map from './map_europe.png';

const Europe = () => {
  const countries = useSelector((state) => state.data);
  return (
    <>
      <div className="bg-dark text-white europe_container">
        <img className="europe_map" src={map} alt="Map" />
        <div className="map_text">
          <div>
            <div className="europe">
              {countries.length}
              {' '}
              COUNTRIES IN EUROPE.
            </div>
          </div>
          <a href="/europe">
            <div>Click here to know more</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Europe;
