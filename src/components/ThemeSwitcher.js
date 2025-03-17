import React from "react";
import { Switch } from "@mui/material";

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
    return (
        <div style={{ textAlign: "right", padding: "10px" }}>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
        </div>
    );
};

export default ThemeSwitcher;
