import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import icon from './icon.png'

const GlassCard = styled(Card)({
  maxWidth: 400,
  margin: '0 auto',
  padding: 20,
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: 10,
  backdropFilter: 'blur(10px)',
  color:'white'
});

const StyledButton = styled(Button)({
  marginTop: 20,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%, #E6BF1A 90%)',
  color: 'white',
});

const CenterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Logo = styled('img')({
  width: 50,
  marginRight: 10,
});

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://banking-appbackend.vercel.app/api/auth/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      setLoggedIn(true);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <CenterBox>
      {isLoggedIn ? (
        <GlassCard>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Welcome!
            </Typography>
            <StyledButton onClick={handleLogout} fullWidth>
              Logout
            </StyledButton>
          </CardContent>
        </GlassCard>
      ) : (
        <GlassCard>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <Logo src={icon} alt="Logo" />
              <Typography variant="h4">Sign In</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}  sx={{
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  }}/>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                    style: { color: 'white' },
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}  sx={{
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  }}/>
              <StyledButton type="submit" fullWidth>
                Login
              </StyledButton>
              {error && (
                <Typography color="error" variant="body2" mt={2}>
                  {error}
                </Typography>
              )}
            </form>
          </CardContent>
        </GlassCard>
      )}
    </CenterBox>
  );
};

export default LoginForm;
