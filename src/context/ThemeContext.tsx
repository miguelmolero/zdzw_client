import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        entryMenu: {
            primary: React.CSSProperties['color'];
            secondary: React.CSSProperties['color'];
            cards: {
                main: React.CSSProperties['color'];
                hover: React.CSSProperties['color'];
            };
        };
    }
  
    interface PaletteOptions {
        entryMenu?: {
            primary?: React.CSSProperties['color'];
            secondary?: React.CSSProperties['color'];
            cards?: {
                main?: React.CSSProperties['color'];
                hover?: React.CSSProperties['color'];
            };
        };
    }
  }

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
                    background: { default: 'rgba(255,255,255,1)' },
                    entryMenu: {
                        primary: 'rgb(247, 255, 238)',
                        secondary: 'rgb(126, 187, 108)',
                        cards: {
                            main: 'rgba(255,255,255,0.3)',
                            hover: 'rgba(102, 122, 85, 0.5)',
                        }
                    },
                  }
                : {
                    primary: { main: '#7bdcb5' },
                    secondary: { main: '#00d084' },
                    background: { default: '#303030' },
                    entryMenu: {
                        primary: 'rgba(170,238,113,1)',
                        secondary: 'rgba(45,97,69,1)',
                        cards: {
                            main: 'rgba(146, 204, 172, 0.3)',
                            hover: 'rgba(192, 228, 161, 0.5)',
                        }
                    },
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
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                    margin: 'dense',
                    size: 'small',
                    fullWidth: true,
                    InputLabelProps: { 
                        shrink: true, 
                    },
                }
            }
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
