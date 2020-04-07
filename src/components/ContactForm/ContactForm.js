import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import withTheme from '../hoc/withTreme';
import { themePropType } from '../../context/ThemeContext';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    theme: themePropType.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { theme } = this.props;
    const { themeConfig, type } = theme;
    return (
      <div
        style={{
          color: themeConfig[type].fontColor,
          background: themeConfig[type].bodybg,
        }}
      >
        <h2>Phonebook</h2>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              className={styles.input}
              type="tel"
              value={number}
              name="number"
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default withTheme(ContactForm);
