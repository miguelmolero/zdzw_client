import { styled, Box} from "@mui/material";

export const RootFactoryMetricContainer = styled(Box)({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden', // Evitar scrollbar
});

export const FactoryMetricMainContentContainer = styled(Box)({
    flexGrow: 1,
    backgroundColor: '#e0f7e9', // Fondo verde suave detrás de las cajas
});