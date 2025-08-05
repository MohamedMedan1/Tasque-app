"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = window.localStorage.getItem("isDark");
            if (stored !== null) {
                setIsDarkMode(JSON.parse(stored));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isDarkMode) {
                window.localStorage.setItem("isDark", JSON.stringify(isDarkMode));
                document.documentElement.classList.add("dark-mode");
            } else {
                window.localStorage.removeItem("isDark");
                document.documentElement.classList.remove("dark-mode");
            }
        }
    }, [isDarkMode]);

    const darkModeValue = useMemo(() => {
        return {isDarkMode, setIsDarkMode}
    },[isDarkMode]);

    return (
        <DarkModeContext.Provider value={darkModeValue}>
        {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    
    if (!context) throw new Error("useDarkMode must be used within a DarkModeProvider");
    
    return context;
}

export { useDarkMode, DarkModeProvider };
