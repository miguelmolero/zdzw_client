import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import {
  Container,
  LogoContainer,
  Logo,
  FormContainer,
} from './styles/LoginStyles';
import logo from '../assets/Logo_ZDZW.png';
import { applicationRoutes } from '../context/ApplicationTypeContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);


  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate(applicationRoutes.EntryMenu); // Redirige a la página de Dashboard después del login
    } catch (error) {
      setError('Error al iniciar sesión. Verifique sus credenciales.');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <FormContainer>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            marginBottom: 2,
            '& .MuiInputBase-input': {
              fontSize: '13px',
              letterSpacing: 'normal',
            },
            '& .MuiInputBase-input:-webkit-autofill': {
              fontSize: '13px',
              letterSpacing: 'normal',
            },
            '& .Mui-focused .MuiInputBase-input': {
              letterSpacing: 'normal',
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
