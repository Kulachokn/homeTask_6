import React from "react";
import withTheme from "./hoc/withTreme";

const ThemeSelector = ({ theme }) => {
    const { config, type, onToggleTheme } = theme;
    return (
        <div className={`themeSelector ${config.bodyBg}`}>
            <span className="label">Toggle theme ({type})</span>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={type === "dark"}
                    onChange={event => onToggleTheme(event.currentTarget.value)}
                />
                <span className="slider round"/>
            </label>
        </div>
    );
};

export default withTheme(ThemeSelector);

// const  ThemeSelector = ({theme, toggleTheme})  => (
//     <div>
//         <span>Toggle theme</span>
//         <label>
//             <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
//             <span></span>
//         </label>
//     </div>
// );
