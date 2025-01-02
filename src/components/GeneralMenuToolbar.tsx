import React from 'react';
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledMenuToolbar } from './styles/GeneralMenuToolbarStyles';
import { applicationRoutes } from '../context/ApplicationTypeContext';
import { Tooltip } from '@mui/material';

const Toolbar : React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledMenuToolbar>
      <Tooltip placement="right" title="Side Menu" arrow>
        <IconButton><MenuIcon /></IconButton>
      </Tooltip>
      <Tooltip placement="right" title="Home" arrow>
        <IconButton onClick={() => {navigate(applicationRoutes.EntryMenu)}}><HomeIcon /></IconButton>
      </Tooltip>
      <Tooltip placement="right" title="Back" arrow>
        <IconButton onClick={() => {navigate(-1)}}><ArrowBackIcon /></IconButton>
      </Tooltip>
    </StyledMenuToolbar>
  );
};

export default Toolbar;
