import { ApplicationTypeProvider } from "./context/ApplicationTypeContext";
import { AuthProvider } from "./context/AuthContext";
import { DataHandlerProvider } from "./context/DataHandlerContext";
import { ThemeProvider } from "./context/ThemeContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <ApplicationTypeProvider>
                    <DataHandlerProvider>
                        {children}
                    </DataHandlerProvider>
                </ApplicationTypeProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}