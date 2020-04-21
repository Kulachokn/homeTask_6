import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext();

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  // eslint-disable-next-line
  toggleTheme = () => {
    this.setState(state => ({
      type: state.type === 'dark' ? 'light' : 'dark',
    }));
  };

  /* eslint-disable react/no-unused-state */
  state = {
    type: 'light',
    themeConfig: {
      light: {
        headerBg: '#006957',
        fontColor: '#1E796A',
        bodybg: '#ffffff',
      },
      dark: {
        headerBg: '#ffffff',
        fontColor: '#5ED0BD',
        bodybg: '#00A287',
      },
    },
    toggleTheme: this.toggleTheme,
  };
  /* eslint-enable react/no-unused-state */

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const themePropType = PropTypes.shape({
  themeConfig: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
});
