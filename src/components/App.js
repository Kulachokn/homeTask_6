import React from "react";
import PhoneBookPage from "./PhoneBookPage";
import ThemeContext from "../context/ThemeContext";
import ThemeSelector from "./ThemeSelector";

const App = toggleTheme => (
    <ThemeContext>
        <ThemeSelector toggleTheme={toggleTheme} />
        <PhoneBookPage />
    </ThemeContext>
);

export default App;