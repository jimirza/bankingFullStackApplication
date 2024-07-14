import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import image from './Cardsimg.png';

const Root = styled('div')({
  minHeight: '100vh',
  background: '#202123',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'center',
});

const Logo = styled('div')({
  position: 'absolute',
  left: '1rem',
});

const MainSection = styled(Container)({

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'left',
  width: '100%',
});

const TextSection = styled(Grid)({
  maxWidth: '600px',
  fontFamily: "PT Sans, sans-serif",
});

const ImageSection = styled(Grid)({
  maxWidth: '600px',
});

const GetStartedButton = styled(Button)({
  marginTop: '2rem',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%, #E6BF1A 90%)',
  
  color:'white'
  
});

const Home = () => {
  return (
    <Root>
    

      <MainSection>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <TextSection item xs={12} md={6}>
            <Typography variant="h3" component="h1" style={{fontFamily: "PT Sans, sans-serif"}}>
            Pinnacle Trust Bank
            </Typography>
            <Typography variant="h5" component="p" gutterBottom  style={{fontFamily: "PT Sans, sans-serif"}}>
            Financial Services That Are As Unique As You Are
            </Typography>
            <GetStartedButton variant="contained" color="primary">
              Get Started
            </GetStartedButton>
          </TextSection>
          <ImageSection item xs={12} md={6} style={{textAlign:'right'}}>
            {/* Add your image here */}
            <img src={image} alt="Main" style={{ width: '100%', height: 'auto' }} />
          </ImageSection>
        </Grid>
      </MainSection>
    </Root>
  );
};

export default Home;
