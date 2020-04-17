import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contactsActions';
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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Filter));

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};
