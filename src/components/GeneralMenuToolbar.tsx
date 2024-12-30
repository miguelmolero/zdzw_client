import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { toolbarStyles } from './styles/GeneralMenuToolbarStyles'; // Importar estilos de la toolbar
import { applicationRoutes } from '../context/ApplicationTypeContext';

const Toolbar : React.FC = () => {
  const navigate = useNavigate();
  const styles = toolbarStyles();

  return (
    <Box sx={styles.sidebar}>
      <IconButton><MenuIcon /></IconButton>
      <IconButton onClick={() => {navigate(applicationRoutes.EntryMenu)}}><HomeIcon /></IconButton>
      <IconButton><SettingsIcon /></IconButton>
    </Box>
  );
};

export default Toolbar;
