import { GeneralStateProvider } from "./ApplicationTypeContext";
import { AuthProvider } from "./AuthContext";
import { DataHandlerProvider } from "./DataHandlerContext";

export const ProviderContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <GeneralStateProvider>
                <DataHandlerProvider>
                    {children}
                </DataHandlerProvider>
            </GeneralStateProvider>
        </AuthProvider>
    );
}