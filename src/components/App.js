import React from 'react';
// import ThemeContext from '../context/ThemeContext';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Layout from './Layout/Layout';

export default function App() {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
    // <ThemeContext>
    //   <Layout>
    //     <ThemeSelector toggleTheme={this.toggleTheme}/>
    //     <ContactForm/>
    //     <Filter/>
    //     <ContactList/>
    //     {contacts.length > 1 && (
    //       <Filter value={filter} onChangeFilter={this.changeFilter}/>
    //     }
    //     {visibleContacts.length > 0 && (
    //       <ContactList
    //         contacts={visibleContacts}
    //         onRemoveContact={this.removeContact}
    //       />
    //     }
    //   </Layout>
    // </ThemeContext>
  );
}
