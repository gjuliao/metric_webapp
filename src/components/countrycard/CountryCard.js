// eslint-disable-next-line import/no-extraneous-dependencies
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './index.css';

// eslint-disable-next-line react/prop-types
const CountryCard = ({
  population,
  name,
  flags,
}) => {
  // eslint-disable-next-line no-console
  console.log(population, name, flags);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flags.png} />
      <Card.Body>
        <Card.Title>
          <div>
            <p>
              This is the flag of
              {' '}
              <span>{name}</span>
              .
              Click below to learn more of this country.
            </p>
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={name}>Learn More</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;

CountryCard.defaultProps = {
  name: '',
  population: 0,
  flags: [],
};

CountryCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  flags: PropTypes.objectOf(),
};
