import { styled, Box } from "@mui/material";

export const StyledMenuToolbar = styled(Box)(({ theme }) => ({
    width: 60,
    bgcolor: `${theme.palette.background.default}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 2,
    borderRight: '1px solid #ccc',
}));
  