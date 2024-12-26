// src/styles/InspectionVisualizatorStyles.ts
import { styled } from '@mui/material';
import { Box} from '@mui/material';

export const RootContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  //overflow: 'hidden',
});

export const MainContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f4f4f4', // Fondo claro para la página
  width: '100%', // Tamaño del área
  height: '100%', // Tamaño del área
});

export const CanvasContainerSC = styled(Box)({
  display: 'flex',
  alignSelf: 'center',
  width: '60%', // Tamaño del área
  height: '70%', // Tamaño del área
});


// export const RowContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'row',
//   width: '80vw',
//   height: '40vh',
//   alignSelf: 'center',
//   justifyContent: 'space-between',
// });
