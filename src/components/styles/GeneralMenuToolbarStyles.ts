import { styled, Box } from "@mui/material";

export const StyledMenuToolbar = styled(Box)(({ theme }) => ({
    minWidth: "55px",
    bgcolor: `${theme.palette.background.default}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #ccc',
}));