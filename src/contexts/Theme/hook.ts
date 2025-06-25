import { createContext, useContext } from "react";
import type { ThemeContextType } from "./provider";

// Custom hook to use theme context
export const useAppTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within an AppThemeProvider");
    }
    return context;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
