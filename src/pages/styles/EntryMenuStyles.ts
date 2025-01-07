import { styled, Box, Paper, Typography } from "@mui/material";

export const EntryBodyContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: `radial-gradient(circle, ${theme.palette.entryMenu.primary} 0%, ${theme.palette.entryMenu.secondary} 100%)`,
}));
export const EntryGridContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
});
export const RowGridContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5%',
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
    alignItems: 'flex-start',
    cursor: 'pointer',
    backgroundColor: `${theme.palette.entryMenu.cards.main}`,
    backdropFilter: 'blur(1px)',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: `${theme.palette.entryMenu.cards.hover}`,
        backdropFilter: 'blur(3px)',
    },
    [theme.breakpoints.up('sm')]: {
        width: '250px',
        height: '250px',
    },
    [theme.breakpoints.up('md')]: {
        width: '300px',
        height: '300px',
    },
}));
export const CardButtonText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    margin: 'auto',
    padding: '0 1.5rem',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
    },
}));