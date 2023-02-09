import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';

const CountryCard = ({
  name,
  flags,
  population,
}) => (
  <table className="card" style={{ width: '100%' }}>
    <Link to={name}>
      <FaArrowRight />
    </Link>
    <tr className="country_name">
      <th>
        {name}
      </th>
    </tr>
    <tr className="card_image">
      <td>
        <img src={flags.png} alt="country flag" />
      </td>
    </tr>
    <tr className="card_population">
      <td>
        <p>
          Pop:
          {' '}
          {population}
        </p>
      </td>
    </tr>
  </table>
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
