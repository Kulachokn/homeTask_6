import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import withTheme from '../hoc/withTreme';

const ContactList = ({ contacts, onRemoveContact, theme }) => {
  const { themeConfig, type } = theme;
  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg,
      }}
    >
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  theme: PropTypes.exact({
    themeConfig: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTheme(ContactList);
