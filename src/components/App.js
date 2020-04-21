import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Layout from './Layout/Layout';

export default class App extends Component {
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <ThemeContext>
        <Layout>
          <ThemeSelector toggleTheme={this.toggleTheme} />
          <ContactForm />
          <Filter />
          <ContactList />
        </Layout>
      </ThemeContext>
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
}

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     loadContacts: (contacts) => dispatch(phoneBookActions.loadContacts(contacts)),
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));
