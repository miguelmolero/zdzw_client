// src/components/Toolbar.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { toolbarStyles } from './styles/ToolbarStyles'; // Importar estilos de la toolbar

const Toolbar : React.FC = () => {
  const styles = toolbarStyles();

  return (
    <Box sx={styles.sidebar}>
      <IconButton><MenuIcon /></IconButton>
      <IconButton><HomeIcon /></IconButton>
      <IconButton><SettingsIcon /></IconButton>
    </Box>
  );
};

export default Toolbar;
