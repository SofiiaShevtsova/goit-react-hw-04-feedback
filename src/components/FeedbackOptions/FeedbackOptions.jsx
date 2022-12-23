import { css } from '@emotion/css';
import PropTypes from 'prop-types';

const btn = `padding: 10px;
width: 25%;
font-size: 20px;
font-weight: 600;
border: 2px solid brown;
border-radius: 10px;
color: brown;
&:hover{
background-color: rgb(150, 50, 50);
color: rgb(255, 255, 255)`;

const FeedbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      {options.map(elem => {
        return (
          <button
            className={css`
              ${btn}
            `}
            onClick={onLeaveFeedback}
            key={elem}
          >
            {elem.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
