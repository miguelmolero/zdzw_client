import { styled } from '@mui/material';
import { Box } from '@mui/material';

// Contenedor principal del login con el fondo de ondas verdes y blancas
export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #a8d28a 0%, #badc7b 50%, #6e9647 100%)', // Degradado verde
  backgroundSize: 'cover', // Aseguramos que el fondo cubra todo el espacio
});

// Contenedor del logo centrado sobre el formulario
export const LogoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px', // Espacio entre el logo y el formulario
});

// Estilo del logo
export const Logo = styled('img')({
  width: '150px',
  height: '150px',
});

// Contenedor del formulario de login
export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // Sombra suave para el formulario
  width: '100%',
  maxWidth: '400px',
}));

