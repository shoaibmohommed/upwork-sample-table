import { useState, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "../../theme";
import { ThemeContext } from "./hook";

export interface ThemeContextType {
    mode: "light" | "dark";
    toggleColorMode: () => void;
    setMode: (mode: "light" | "dark") => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const contextValue: ThemeContextType = {
        mode,
        toggleColorMode,
        setMode,
    };

    return (
        <ThemeContext.Provider value={contextValue} >
            <ThemeProvider theme={getTheme(mode)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};



// Legacy export for backward compatibility
export const ColorModeContext = ThemeContext;


