import { Wrap, FeedbackOption } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <Wrap>
        {options.map(option => {
          return (
            <FeedbackOption
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackOption>
          );
        })}
      </Wrap>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
