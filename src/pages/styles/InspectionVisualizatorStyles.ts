// src/styles/InspectionVisualizatorStyles.ts
import { styled } from '@mui/system';
import { Box, FormControl} from '@mui/material';

export const RootContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
});

export const MainContent = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f4f4f4', // Fondo claro para la página
});

export const SelectorContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
});

export const FormControlStyled = styled(FormControl)({
  minWidth: 200,
  backgroundColor: "#fff",
});

export const LabelContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',  // Espacio entre el label y el gráfico
  fontSize: '1.2rem',    // Tamaño del texto del label
  fontWeight: 'bold',    // Texto en negrita
});

export const CanvasContainer = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  border: '1px solid #ccc',
  backgroundColor: '#fff', // Fondo blanco para el canvas
  width: '70%', // Tamaño del área
});
