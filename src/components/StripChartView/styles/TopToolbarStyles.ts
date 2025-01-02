import {styled, Box} from '@mui/material';

export const StyledTopToolbar = styled(Box)(({theme}) => ({
    display: "flex",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    background: `linear-gradient(90deg, ${theme.palette.secondary.main} 30%, ${theme.palette.background.default} 95%)`,
    flexShrink: 0
}));

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

