import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaArrowRight } from 'react-icons/fa';
import './index.css';

const CountryCard = ({
  name,
  flags,
  population,
}) => (
  <table className="card" style={{ width: '18rem' }}>
    <a href={name}>
      <FaArrowRight />
    </a>
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
