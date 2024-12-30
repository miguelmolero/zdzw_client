import { styled } from '@mui/material';
import { Box} from '@mui/material';

export const RootContainer = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
});

export const MainContent = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#f4f4f4',
  width: '100%',
  height: '100%',
});