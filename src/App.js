import { CssBaseline } from '@mui/material';

import React from 'react';
import './App.css';
import Header from './Components/Header';
import JobCard from './Components/JobCard';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "#eeeeee",
//   },
//   jobCard: {
//     marginTop: "50%",
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <div style={{backgroundColor: '#eeeeee', height: '100vh', width: '100vw'}} >
      <CssBaseline />
      <Header />
      <JobCard />
    </div>
  );
}

export default App;
