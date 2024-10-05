export const entryMenuStyles = () => ({
  root: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden', // Evitar scrollbar
  },
  mainContent: {
    flexGrow: 1,
    bgcolor: '#e0f7e9', // Fondo verde suave detrás de las cajas
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 3,
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6, // Mayor separación vertical entre filas
  },
  row: {
    display: 'flex',
    gap: 6, // Mayor separación horizontal entre cajas
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  card: {
    width: { xs: '100%', sm: '450px', md: '500px' }, // Cajas más grandes
    height: { xs: '200px', sm: '250px', md: '300px' }, // Ajuste de altura para mayor tamaño
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    bgcolor: '#fff', // Fondo blanco para las cajas
    transition: 'background-color 0.3s ease', // Transición suave al hover
    '&:hover': {
      bgcolor: '#78c67a', // Color verde más oscuro al pasar el ratón
    },
  },
  cardText: {
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Tamaño de letra mayor
    fontWeight: 'bold',
  },
});