import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { headerStyles } from './styles/HeaderStyles';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/Logo_ZDZW.png';
import { useApplicationName } from '../context/GeneralStateContext';

const Header : React.FC = () => {
  const styles = headerStyles();
  const applicationName = useApplicationName(); 

  return (
    <Box sx={styles.header}>
      <Box sx={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <Typography variant="h6" sx={styles.title}>{applicationName}</Typography>
      </Box>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </Box>
  );
};

export default Header;
