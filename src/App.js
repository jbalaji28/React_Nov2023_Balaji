import React from 'react';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import SignUp from './frmctrl/signup';
import Login from './frmctrl/login';
import HomePage from './frmctrl/home';
import Product from './frmctrl/products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CosmeticsProvider } from './frmctrl/CosmeticsContext';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

const API_URL = 'http://localhost:3000'; 


const App = () => {
  const [checked, setChecked] = useState(true);
  

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 
  const fetchCosmeticsData = async () => {
    try {
      const response = await axios.get(`${API_URL}/cosmetics`);
      const cosmeticsData = response.data;
     
    } catch (error) {
      console.error('Error fetching cosmetics data:', error);
    }
  };

 
  useEffect(() => {
    fetchCosmeticsData();
  }, []);

  return (
    <Router>
      <CosmeticsProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/login'
              element={
                <Paper elevation={3} style={{ backgroundColor: 'rgb(240,240,240,0.6)', marginTop: "30px", width:"500px"}}>
                  <Chip
                    icon={checked ? <PersonIcon /> : <LockIcon />}
                    label={checked ? 'Sign up' : 'Login'}
                    color="primary"
                    variant="outlined"
                  />
                  <br />
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <br />
                  {checked ? <SignUp /> : <Login />}
                </Paper>
              }
            />
            <Route
              path='/registration'
              element={
                <Paper elevation={3} style={{ backgroundColor: 'rgb(240,240,240,0.6)', marginTop: "30px", width:"500px"}}>
                  <Chip
                    icon={checked ? <PersonIcon /> : <LockIcon />}
                    label={checked ? 'Sign up' : 'Login'}
                    color="primary"
                    variant="outlined"
                  />
                  <br />
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <br />
                  {checked ? <SignUp /> : <Login />}
                </Paper>
              }
            />
            <Route path='/explore' element={<Product />} />
            <Route path='/SIGNUP' element={<Product />} />
            <Route path='/LOGIN' element={<Product />} />
          </Routes>
        </div>
      </CosmeticsProvider>
    </Router>
  );
};

export default App;
