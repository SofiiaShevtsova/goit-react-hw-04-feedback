import { css } from '@emotion/css';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <div>
      <h2
        className={css`
          font-size: 32px;
          margin-bottom: 20px;
          color: rgb(150, 50, 50);
        `}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

export default Section;
