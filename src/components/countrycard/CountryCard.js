import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';

const CountryCard = ({
  name,
  flags,
  population,
}) => (
  <div data-testId="table" title="table" className="card" style={{ width: '100%' }}>
    <Link to={name}>
      <FaArrowRight />
    </Link>
    <div className="country_name">
      <th>
        {name}
      </th>
    </div>
    <div className="card_image">
      <div>
        <img src={flags.png} alt="country flag" />
      </div>
    </div>
    <div className="card_population">
      <div>
        <p>
          Pop:
          {' '}
          {population}
        </p>
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
