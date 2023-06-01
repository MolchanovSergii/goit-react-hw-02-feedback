import css from './Fedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.button_feedback}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
