import { styled, Box} from "@mui/material";

export const FactoryMetricMainContentContainer = styled(Box)({
    flexGrow: 1,
    backgroundColor: '#e0f7e9', // Fondo verde suave detrás de las cajas
    display: 'flex',
});

export const CanvasContainerStats = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    height: '100%',
});