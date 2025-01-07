import { ApplicationTypeProvider } from "./context/ApplicationTypeContext";
import { AuthProvider } from "./context/AuthContext";
import { DataHandlerProvider } from "./context/DataHandlerContext";
import { StripChartProvider } from "./context/StripChartContext";
import { StatisticsProvider } from "./context/StatisticsContext";
import { ThemeProvider } from "./context/ThemeContext";

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <ApplicationTypeProvider>
                    <DataHandlerProvider>
                        <StripChartProvider>
                            <StatisticsProvider>
                                {children}
                            </StatisticsProvider>
                        </StripChartProvider>
                    </DataHandlerProvider>
                </ApplicationTypeProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}