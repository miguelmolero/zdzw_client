import { styled, Box, Typography } from "@mui/material";

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  bgcolor: '#fff',
  position: 'relative',
  background: 'rgba(255,255,255,1)',
  '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 50%, ${theme.palette.primary.main} 70%)`,
  },
}));
export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
export const Logo = styled('img')(({ theme }) => ({
  height: '40px',
  width: 'auto',
  marginRight: '8px',
}));
export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));