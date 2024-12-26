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

export const InspectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const CanvasContainerSC = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignSelf: 'flex-start',
  height: '100%',
});