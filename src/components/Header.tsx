// src/components/Header.tsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { headerStyles } from './styles/HeaderStyles'; // Importar estilos del header
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/Logo_ZDZW.png'; // Ruta del logo

const Header : React.FC = () => {
  const styles = headerStyles();

  return (
    <Box sx={styles.header}>
      <Box sx={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <Typography variant="h6" sx={styles.title}>EMAT Ultrasonic Inspection</Typography>
      </Box>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </Box>
  );
};

export default Header;
