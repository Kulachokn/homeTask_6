import ThemeContext from "../../context/ThemeContext";
import React from "react";

const withTheme = WrappedComponent => {
    return function WithTheme(props) {
        return (
            <ThemeContext.Consumer>
                {theme => <WrappedComponent {...props} theme={theme} />}
            </ThemeContext.Consumer>
        );
    };
};

export default withTheme;
