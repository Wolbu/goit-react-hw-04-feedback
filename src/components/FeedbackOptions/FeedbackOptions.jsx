import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, incrementValue }) => {
  return (
    <ul className={s.commentsButtons}>
      {options.map(feedback => {
        return (
          <li key={feedback}>
            <button type="button" name={feedback} onClick={incrementValue}>
              {feedback}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  incrementValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
