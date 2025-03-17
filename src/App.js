import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ArticlesPage />
      </ThemeProvider>
  );
}

export default App;
