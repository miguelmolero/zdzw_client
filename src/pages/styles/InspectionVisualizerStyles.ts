import { styled } from '@mui/material';
import { Box} from '@mui/material';

export const InspectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'auto',
});

export const CanvasContainerSC = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignSelf: 'flex-start',
  height: '100%',
  width: '100%',
});

export const TablesContainerSC = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  padding: '10px',
  boxSizing: 'border-box',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});