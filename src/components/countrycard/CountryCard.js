import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './index.css';

const CountryCard = ({
  name,
  flags,
  population,
}) => (
  <Card style={{ width: '18rem' }}>
    <img src={flags.png} alt="country flag" />
    <div className="card_body">
      <Card.Title>
        <div className="flag_title">
          <h4 className="country_name">{name}</h4>
          <p>
            Population:
            <br />
            {population}
          </p>
          <a href={name}>Learn More</a>
        </div>
      </Card.Title>
    </div>
  </Card>
);

export default CountryCard;

CountryCard.defaultProps = {
  name: '',
  flags: [],
  population: 0,
};

CountryCard.propTypes = {
  name: PropTypes.string,
  flags: PropTypes.objectOf(),
  population: PropTypes.number,
};
