import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../hoc/withTreme';
import styles from './ThemeSelector.module.css';

const ThemeSelector = ({ theme }) => {
  const { themeConfig, type } = theme;
  return (
    <div>
      <span
        style={{
          color: themeConfig[type].headerBg,
        }}
      >
        {theme.type}
      </span>
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
