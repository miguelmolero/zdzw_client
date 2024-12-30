import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Logo, LogoContainer, StyledHeader, Title } from './styles/HeaderStyles';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/Logo_ZDZW.png';
import { useApplicationName } from '../context/ApplicationTypeContext';

const Header : React.FC = () => {
  const applicationName = useApplicationName(); 

  return (
    <StyledHeader>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <Title variant="h6">{applicationName}</Title>
      </LogoContainer>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </StyledHeader>
  );
};

export default Header;
