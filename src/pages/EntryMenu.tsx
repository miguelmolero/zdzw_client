import React from 'react';
import { Box, Paper, Avatar, Typography, IconButton } from '@mui/material';
import { entryMenuStyles } from './styles/EntryMenuStyles'; // Importar los estilos
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/Logo_ZDZW.png';


const EntryMenu = () => {
  const styles = entryMenuStyles();

  return (
    <Box sx={styles.root}>
      {/* Barra lateral */}
      <Box sx={styles.sidebar}>
        <IconButton><MenuIcon /></IconButton>
        <IconButton><HomeIcon /></IconButton>
        <IconButton><SettingsIcon /></IconButton>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.mainContent}>
        {/* Header */}
        <Box sx={styles.header}>
          <Box sx={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
          </Box>
          <Typography variant="h6">ZDZW Weld Inspection App</Typography>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </Box>

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






