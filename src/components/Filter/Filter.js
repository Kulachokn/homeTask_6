import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../hoc/withTreme';

function Filter({ value, onChangeFilter, theme }) {
  const { themeConfig, type } = theme;
  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg,
      }}
    >
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Filter);
