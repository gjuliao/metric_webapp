import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaArrowRight } from 'react-icons/fa';
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
          <a href={name}>
            <FaArrowRight />
          </a>
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
