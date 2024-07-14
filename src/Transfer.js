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

const Transfer = () => {
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [response, setResponse] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'https://banking-appbackend.vercel.app/api/auth/transfer',
        { recipientAccountNumber, amount: parseFloat(amount) },
        { headers: { 'x-auth-token': token } }
      );
      setResponse(response.data);
      setSuccess(true);
      console.log('Transfer successful:', response.data);
    } catch (error) {
      setSuccess(false);
      console.error('Error transferring money:', error.response.data);
    }
  };

  return (
    <CenterBox>
      <GlassCard>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Transfer Money
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Recipient Account Number"
              type="text"
              value={recipientAccountNumber}
              onChange={(e) => setRecipientAccountNumber(e.target.value)}
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
            <StyledButton type="submit" fullWidth>
              Transfer
            </StyledButton>
          </form>
          {success && response && (
            <Box mt={2}>
              <Typography variant="body1" gutterBottom>
                Transfer successful!
              </Typography>
              <Typography variant="body2" gutterBottom>
                Recipient Email: {response.recipientEmail}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Recipient Account Number: {response.recipientAccountNumber}
              </Typography>
            </Box>
          )}
        </CardContent>
      </GlassCard>
    </CenterBox>
  );
};

export default Transfer;
