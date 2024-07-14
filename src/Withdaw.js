import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

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
});

const CenterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'https://banking-appbackend.vercel.app/api/auth/withdraw',
        { amount: parseFloat(amount) },
        { headers: { 'x-auth-token': token } }
      );
      console.log('Withdraw successful:', response.data);
      setSuccess(true);
      setError('');
    } catch (error) {
      console.error('Error withdrawing money:', error.response.data);
      setError(error.response.data.message || 'Error withdrawing money');
      setSuccess(false);
    }
  };

  return (
    <CenterBox>
      <GlassCard>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Withdraw Money
          </Typography>
          {success ? (
            <Typography color="success" variant="h6" mt={2}>
              Withdrawal successful!
            </Typography>
            
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              {error && (
                <Typography color="error" variant="body2" mt={2}>
                  {error}
                </Typography>
              )}
              <StyledButton type="submit" fullWidth>
                Withdraw
              </StyledButton>
            </form>
          )}
        </CardContent>
      </GlassCard>
    </CenterBox>
  );
};

export default Withdraw;
