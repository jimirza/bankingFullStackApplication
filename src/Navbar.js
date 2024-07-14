import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { styled } from '@mui/system';
import icon from './icon.png'
import { useNavigate } from 'react-router-dom';
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');  // Redirect to login page after logout
    };
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginLeft:'10px', marginRight:'10px', }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                    <img src={icon} alt="icon" style={{ width: '50px', marginRight: '10px' }} />
                </Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/withdraw" style={{textDecoration:'none',color:'white', margin:'5px'}} >Withdraw</Link>
                        <Link to="/transfer" style={{textDecoration:'none',color:'white', margin:'5px'}}>Transfer</Link>
                        <Link to="/deposit" style={{textDecoration:'none',color:'white', margin:'5px'}}>Deposit</Link>
                        <span onClick={handleLogout} style={{ textDecoration: 'none', color: 'white', margin: '5px', cursor: 'pointer' }}>Logout</span>
                        
                    </>
                ) : (
                    <>
                    <Link to="/signup" style={{textDecoration:'none',color:'white', margin:'5px'}}>Sign Up</Link>
                    <Link to="/login" style={{textDecoration:'none',color:'white', margin:'5px'}}>Login</Link>
                    </>
                )}
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/" style={{textDecoration:'none',color:'white', margin:'5px'}}>Home</Link>
            </div> */}
        </nav>
    );
};
 
export default Navbar;
