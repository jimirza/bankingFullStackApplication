import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import icon from './icon.png';

const GlassCard = styled(Card)({
  maxWidth: 400,
  margin: '0 auto',
  padding: 20,
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: 10,
  backdropFilter: 'blur(10px)',
  color: 'white',
});

const StyledButton = styled(Button)({
  marginTop: 20,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%, #E6BF1A 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 50%, #E6BF1A 90%)',
  },
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

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('savings'); // Default to 'savings'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountNumber = generateAccountNumber();

    try {
      const response = await axios.post('https://banking-appbackend.vercel.app/api/auth/register', {
        email,
        password,
        accountType,
        accountNumber,
      });
      console.log(response.data); // Assuming your API returns a token upon successful registration
      setSuccess(true); // Set success to true
      setError(''); // Clear any previous error
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message); // Display the error message from the API
      setSuccess(false); // Ensure success is false
    }
  };

  return (
    <CenterBox>
      <GlassCard>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <Logo src={icon} alt="Logo" />
            <Typography variant="h4">Sign Up</Typography>
          </Box>
          {success ? (
            <Typography color="success" variant="h6" mt={2}>
              Signup successful! Please login to access your account.
            </Typography>
          ) : (
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
                }}
                sx={{
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
                }}
              />
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
                }}
                sx={{
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
                }}
              />
              <TextField
                label="Account Type"
                select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                sx={{
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
                }}
              >
                <MenuItem value="savings">Savings</MenuItem>
                <MenuItem value="checkings">Checkings</MenuItem>
              </TextField>
              {error && (
                <Typography color="error" variant="body2" mt={2}>
                  {error}
                </Typography>
              )}
              <StyledButton type="submit" fullWidth>
                Signup
              </StyledButton>
            </form>
          )}
        </CardContent>
      </GlassCard>
    </CenterBox>
  );
};

export default SignupForm;
