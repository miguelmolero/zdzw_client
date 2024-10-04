import React from 'react';
import { Box, Paper, Avatar, Typography, IconButton } from '@mui/material';
import { entryMenuStyles } from './styles/EntryMenuStyles'; // Importar los estilos
import Header from '../components/Header'; // Importar el Header reutilizable
import Toolbar from '../components/Toolbar'; // Importar la Toolbar reutilizable
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PersonIcon from '@mui/icons-material/Person';
// import logo from '../assets/Logo_ZDZW.png';


const EntryMenu = () => {
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
              <Paper elevation={3} sx={styles.card}>
                <Typography sx={styles.cardText}>Inspection Visualizator</Typography>
              </Paper>
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






