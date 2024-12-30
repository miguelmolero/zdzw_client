import { GeneralStateProvider } from "./context/ApplicationTypeContext";
import { AuthProvider } from "./context/AuthContext";
import { DataHandlerProvider } from "./context/DataHandlerContext";
import { ThemeProvider } from "./theme/ThemeContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <GeneralStateProvider>
                    <DataHandlerProvider>
                        {children}
                    </DataHandlerProvider>
                </GeneralStateProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}