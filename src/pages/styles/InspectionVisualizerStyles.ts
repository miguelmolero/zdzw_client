import { styled } from '@mui/material';
import { Box} from '@mui/material';

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