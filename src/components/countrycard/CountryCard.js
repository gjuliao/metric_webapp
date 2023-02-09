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
    <tr>
      <th className="card_image">
        <img src={flags.png} alt="country flag" />
      </th>
    </tr>
    <tr className="country_name">
      <td>
        {name}
        <p>
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
