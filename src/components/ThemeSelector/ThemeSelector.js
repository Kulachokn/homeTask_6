import React from "react";
import withTheme from "../hoc/withTreme";
import styles from "../ThemeSelector/ThemeSelector.module.css"


const ThemeSelector = ({ theme }) => {
    return (
        <div>
            <span className="label">{theme.type}</span>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={theme.type === "dark"}
                onChange={() => theme.toggleTheme()}
            />
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



// const ThemeSelector = ({ theme }) => {
//     const { config, type, onToggleTheme } = theme;
//     return (
//         <div className={`themeSelector ${config.bodyBg}`}>
//             <span className="label">Toggle theme ({type})</span>
//             <label className="switch">
//                 <input
//                     type="checkbox"
//                     checked={type === "dark"}
//                     onChange={event => onToggleTheme(event.currentTarget.value)}
//                 />
//                 <span className="slider round"/>
//             </label>
//         </div>
//     );
// };