import {styled, Box} from '@mui/material';

export const StyledTopToolbar = styled(Box)({
    display: "flex",
    width: "100%",
    height: "50px", // Altura del marco superior
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#a5d6a7', // Color del marco superior
    flexShrink: 0
});

export const LeftButtonsContainer = styled(Box)({
    display: "flex",
    width: "auto",
    height: "100%",
});

export const RightButtonsContainer = styled(Box)({
    display: "flex",
    width: "50px",
    height: "100%",
    justifyContent: "center",
});

