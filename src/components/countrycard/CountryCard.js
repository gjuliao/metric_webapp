import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './index.css';

const CountryCard = ({
  name,
  flags,
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={flags.png} />
    <Card.Body>
      <Card.Title>
        <div className="flag_title">
          <h4>
            This is the flag of
            {' '}
            <span>{name}</span>
            .
          </h4>
          <h6>Click below to learn more of this country.</h6>
        </div>
      </Card.Title>
    </Card.Body>
    <Card.Body>
      <Card.Link href={name}>Learn More</Card.Link>
    </Card.Body>
  </Card>
);

export default CountryCard;

CountryCard.defaultProps = {
  name: '',
  flags: [],
};

CountryCard.propTypes = {
  name: PropTypes.string,
  flags: PropTypes.objectOf(),
};
