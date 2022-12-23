import { css } from '@emotion/css';
import PropTypes from 'prop-types';

export const NotificationMessage = props => {
  return (
    <p
      className={css`
        font-size: 24px;
        color: rgb(150, 50, 50);
      `}
    >
      {props.message}
    </p>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
