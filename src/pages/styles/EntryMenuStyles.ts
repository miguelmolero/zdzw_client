import { styled, Box, Paper, Typography } from "@mui/material";

export const EntryBodyContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: `radial-gradient(circle, rgb(170,238,113,1) 0%, rgba(45,97,69,1) 100%)`,
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
    backgroundColor: 'rgba(146, 204, 172, 0.3)', // Semi-transparent white background
    backdropFilter: 'blur(1px)', // Blur effect
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(192, 228, 161, 0.5)',
        backdropFilter: 'blur(3px)',
    },
    [theme.breakpoints.up('sm')]: {
        width: '450px',
        height: '250px',
    },
    [theme.breakpoints.up('md')]: {
        width: '300px',
        height: '500px',
    },
}));
export const CardButtonText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    padding: '2em 0 0 0',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
    },
}));