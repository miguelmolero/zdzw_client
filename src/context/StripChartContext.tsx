import React, { createContext, useState, useContext, ReactNode } from "react";

// Define la estructura del contexto
interface StripChartContextProps {
    size: number; // Tamaño compartido entre componentes
    sideMenuOpen: boolean; // Estado del SideMenuView
    toggleSideMenu: () => void; // Función para abrir/cerrar el SideMenuView
    setSize: (size: number) => void; // Función para actualizar el tamaño
}

// Crea el contexto
const StripChartContext = createContext<StripChartContextProps | undefined>(undefined);

// Proveedor del contexto
export const StripChartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [size, setSize] = useState(50); // Valor inicial del tamaño
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setSideMenuOpen((prev) => !prev);
    };

    return (
        <StripChartContext.Provider
            value={{
                size,
                sideMenuOpen,
                toggleSideMenu,
                setSize,
            }}
        >
            {children}
        </StripChartContext.Provider>
    );
};

// Hook para consumir el contexto
export const useStripChartContext = (): StripChartContextProps => {
    const context = useContext(StripChartContext);
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de un AppProvider");
    }
    return context;
};
