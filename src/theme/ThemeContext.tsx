import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

interface ThemeContextProps {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: { main: '#92ccac' },
                    secondary: { main: '#c0e4a1' },
                  }
                : {
                    primary: { main: '#7bdcb5' },
                    secondary: { main: '#00d084' },
                    background: { default: '#303030' },
                  }),
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: '12px',
                        borderRadius: '0px',
                    },
                },
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
