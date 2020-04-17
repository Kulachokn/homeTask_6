import { createAction } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}));

const removeContact = createAction('contact/remove');
const changeFilter = createAction('contact/filter');

export default {
  addContact,
  removeContact,
  changeFilter,
};

// const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: {
//       id: uuid(),
//       name,
//       number
//     }
//   }
// });

// const removeContact = contactId => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     contactId
//   }
// });

// const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter
//   }
// });
