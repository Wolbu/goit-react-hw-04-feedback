import PropTypes from 'prop-types';
const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul>
      <li>
        <p className="counterValue">Good: {good} </p>
      </li>
      <li>
        <p className="counterValue">Neutral: {neutral} </p>
      </li>
      <li>
        <p className="counterValue">Bad: {bad} </p>
      </li>
      <li>
        <p className="counterValue">Total: {totalFeedback()} </p>
      </li>
      <li>
        <p className="counterValue">Positive feedback:{positiveFeedback()}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export { Statistics };
