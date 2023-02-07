// eslint-disable-next-line import/no-extraneous-dependencies
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './index.css';

// eslint-disable-next-line react/prop-types
const CountryCard = ({
  population,
  name,
  currency,
  flags,
}) => {
  // eslint-disable-next-line no-console
  console.log(population, name, currency, flags);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flags.png} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card_text">
          {flags.alt ? flags.alt : 'Appologies.  The information about this flag is currently unavailable.  We are working hard to avoid empty spaces in the API.'}
        </Card.Text>
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
  currency: '',
};

CountryCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  flags: PropTypes.string,
  currency: PropTypes.string,
};
