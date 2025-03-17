import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#007bff" },
        background: { default: "#f8f9fa", paper: "#fff" },
        text: { primary: "#000" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#90caf9" },
        background: { default: "#121212", paper: "#1e1e1e" },
        text: { primary: "#fff" },
    },
});
