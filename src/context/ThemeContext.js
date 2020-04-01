import React, {Component, createContext} from "react";

// const Context = createContext();

// const themeConfig = {
//     light: {
//         headerBg: '#F7B30C',
//         fontColor: 'black',
//         bodybg: 'white'
//     },
//     dark: {
//         headerBg: '#3c3c3c',
//         fontColor: 'white',
//         bodybg: 'black'
//     }
// };

// const { Provider, Consumer } = createContext({
//     type: 'light',
//     config: themeConfig.light,
//     toggleTheme: () => null,
// });

const { Provider, Consumer } = createContext();

export default class ThemeContext extends Component {
    static Consumer = Consumer;
    // static Consumer = Context.Consumer;

    toggleTheme = () => {
        this.setState({
            type: this.state.type === "dark" ? "light" : "dark"
        });
    };

    state = {
        type: "light",
        themeConfig: {
            light: {
                headerBg: '#F7B30C',
                fontColor: 'black',
                bodybg: 'white'
            },
            dark: {
                headerBg: '#3c3c3c',
                fontColor: 'white',
                bodybg: 'black'
            }
        },
        toggleTheme: this.toggleTheme
    };

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}


// const { Provider, Consumer } = createContext({
//     type: 'light',
//     config: themeConfig.light,
//     toggleTheme: () => null,
// });

// toggleTheme = () => {
//     this.setState(state => ({
//         theme: state.theme === 'light' ? 'dark' : 'light',
//         config: themeConfig === dark ? light : dark
//     }));
// };
//
// toggleTheme = () => {
//     const { type, config } = this.state;
//     const { dark, light } = themeConfig;
//     this.setState({
//         type: type === "dark" ? "light" : "dark",
//         config: config === dark ? light : dark
//     });
// };
// toggleTheme = () => {
//     const themeKind = this.state.themeType === "dark" ? "light" : "dark";
//     this.setState({
//         themeType: themeKind,
//         theme: themeConfig[themeKind]
//     });
// };

// static Consumer = Context.Consumer;

// toggleTheme = () => {
//     const { type, config } = this.state;
//     const { dark, light } = themeConfig;
//     this.setState({
//         type: type === "dark" ? "light" : "dark",
//         config: config === dark ? light : dark
//     });
// };

// light: {
//     bodyBg: "bgLight",
//     btnBgColor: "formBtnLight"
// },
// dark: {
//     bodyBg: "bgDark",
//     btnBgColor: "formBtnDark"
// }