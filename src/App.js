import React, { useState,useEffect } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Deposit from './Deposit';
import Withdraw from './Withdaw';
import Transfer from './Transfer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';

const Root = styled('div')({
  minHeight: '100vh',
  background: '#202123',

});
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatusChange = (status) => {
      setIsLoggedIn(status);
  };
 

  return (
    <Root>
      <div>
          <Router>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/transfer" element={<Transfer />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/signup" element={<SignupForm />} />
                  <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
              </Routes>
          </Router>
      </div>
      </Root>
  );
};

export default App;
