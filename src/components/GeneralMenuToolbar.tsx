import React from 'react';
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { StyledMenuToolbar } from './styles/GeneralMenuToolbarStyles'; // Importar estilos de la toolbar
import { applicationRoutes } from '../context/ApplicationTypeContext';

const Toolbar : React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledMenuToolbar>
      <IconButton><MenuIcon /></IconButton>
      <IconButton onClick={() => {navigate(applicationRoutes.EntryMenu)}}><HomeIcon /></IconButton>
      <IconButton><SettingsIcon /></IconButton>
    </StyledMenuToolbar>
  );
};

export default Toolbar;
