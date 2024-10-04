// src/styles/HeaderStyles.ts
export const headerStyles = () => ({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 2,
      bgcolor: '#fff', // Header en blanco
      borderBottom: '1px solid #ccc',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '40px', // Ajustar el tamaño del logo
      width: 'auto',
      marginRight: '8px', // Espacio entre el logo y el título
    },
    title: {
      fontSize: '1.5rem', // Tamaño del texto del título
      fontWeight: 'bold',
    },
  });
  