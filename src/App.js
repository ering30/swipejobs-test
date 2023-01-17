import { CssBaseline } from '@mui/material';

import React from 'react';
import './App.css';
import Header from './Components/Header';
import JobCard from './Components/JobCard';


function App() {
  return (
    <div 
      style={{
        backgroundColor: '#eeeeee', 
        height: '100vh', 
        width: '100vw'
      }} 
    >
      <CssBaseline />
      <Header />
      <JobCard />
    </div>
  );
}

export default App;
