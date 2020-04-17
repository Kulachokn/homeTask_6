import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload.contact];
//
//     case contactsActions.removeContact.type:
//       return state.filter(contact => contact.id !== payload);
//
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactsActions.changeFilter.type:
//       return payload;
//
//     default:
//       return state;
//   }
// };

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };
//
// addContact = (name, number) => {
//   const contact = {
//     id: uuid(),
//     name,
//     number,
//   };
//
//   if (
//     this.state.contacts.find(storedContact => storedContact.name === name)
//   ) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//
//   this.setState(prevState => {
//     return {
//       contacts: [...prevState.contacts, contact],
//     };
//   });
// };
//
// removeContact = contactId => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     };
//   });
// };
//
// changeFilter = filter => {
//   this.setState({ filter });
// };
