import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import { entryMenuStyles } from './styles/EntryMenuStyles'; // Importar los estilos
import Header from '../components/Header'; // Importar el Header reutilizable
import Toolbar from '../components/Toolbar'; // Importar la Toolbar reutilizable


const EntryMenu : React.FC = () => {
  const styles = entryMenuStyles();

  return (
    <Box sx={styles.root}>
      {/*Toolbar */}
      <Toolbar />

      {/* Contenido principal */}
      <Box sx={styles.mainContent}>
        {/* Header */}
        <Header />

        {/* Cuerpo principal */}
        <Box sx={styles.body}>
          <Box sx={styles.gridContainer}>
            <Box sx={styles.row}>
              <Paper elevation={3} sx={styles.card}>
                <Typography sx={styles.cardText}>Factory Metrics</Typography>
              </Paper>
              <Link to="/inspection-visualizator" style={{ textDecoration: 'none' }}>
                <Paper elevation={3} sx={styles.card}>
                  <Typography sx={styles.cardText}>Inspection Visualizator</Typography>
                </Paper>
              </Link>
            </Box>
            <Box sx={styles.row}>
              <Paper elevation={3} sx={styles.card}>
                <Typography sx={styles.cardText}>Inspection Analysis</Typography>
              </Paper>
              <Paper elevation={3} sx={styles.card}>
                <Typography sx={styles.cardText}>Welding Process Quality</Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EntryMenu;






