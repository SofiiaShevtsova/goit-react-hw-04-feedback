import { css } from '@emotion/css';
import PropTypes from 'prop-types';

import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return total > 0 ? (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        list-style: none;
        align-items: flex-start;
        font-size: 20px;
        color: brown;
      `}
    >
      <li className="stat__item">
        Good: <span>{good}</span>
      </li>
      <li className="stat__item">
        Neutral: <span>{neutral}</span>
      </li>
      <li className="stat__item">
        Bad: <span>{bad}</span>
      </li>
      <li className="stat__item">
        Total: <span>{total}</span>
      </li>
      <li className="stat__item">
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <NotificationMessage message={"'There is no feedback'"} />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
