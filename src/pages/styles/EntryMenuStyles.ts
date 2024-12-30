import { styled, Box, Paper, Typography } from "@mui/material";

export const RootEntryContainer = styled(Box)({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden', // Evitar scrollbar
});
export const EntryMainContentContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#e0f7e9', // Fondo verde suave detrás de las cajas
});
export const EntryBodyContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
});
export const EntryGridContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
});
export const RowGridContainer = styled(Box)({
    display: 'flex',
    gap: 100, // Mayor separación horizontal entre cajas
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
});
export const CardButton = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#fff',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#78c67a',
    },
    [theme.breakpoints.up('sm')]: {
        width: '450px',
        height: '250px',
    },
    [theme.breakpoints.up('md')]: {
        width: '500px',
        height: '300px',
    },
}));
export const CardButtonText = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
}));