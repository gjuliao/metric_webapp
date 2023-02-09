import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaArrowRight } from 'react-icons/fa';
import './index.css';

const CountryCard = ({
  name,
  flags,
  population,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={flags.png} alt="country flag" />
    <div className="card_body">
      <div className="card_title">
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
      </div>
    </div>
  </div>
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
