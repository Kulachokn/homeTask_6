import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../hoc/withTreme';
import styles from './ThemeSelector.module.css';

const ThemeSelector = ({ theme }) => {
  return (
    <div>
      <span className="label">{theme.type}</span>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={theme.type === 'dark'}
        onChange={() => theme.toggleTheme()}
      />
    </div>
  );
};

ThemeSelector.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(ThemeSelector);
