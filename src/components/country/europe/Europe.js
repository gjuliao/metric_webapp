import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import Card from 'react-bootstrap/Card';
import map from './map_europe.png';

const Europe = () => {
  const countries = useSelector((state) => state.data);
  return (
    <Card className="bg-dark text-white europe_container">
      <Card.Img className="europe_map" src={map} alt="Map" />
      <Card.ImgOverlay>
        <a href="/europe">
          <Card.Title>
            <div className="europe">
              Europe has
              {' '}
              {countries.length}
              {' '}
              countries.
            </div>
          </Card.Title>
          <Card.Text>Click here to know more</Card.Text>
        </a>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Europe;
