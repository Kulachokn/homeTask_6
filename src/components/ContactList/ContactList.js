import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contactsActions';
import ContactListItem from '../ContactListItem/ContactListItem';
import withTheme from '../hoc/withTreme';
import { themePropType } from '../../context/ThemeContext';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact, theme }) => {
  const { themeConfig, type } = theme;
  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg,
      }}
      className={styles.container}
    >
      <h2
        style={{
          color: themeConfig[type].headerBg,
        }}
      >
        Contacts
      </h2>
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

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ContactList));

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  theme: themePropType.isRequired,
};
