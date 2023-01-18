import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import JobCard from './Components/JobCard';
import useJobs from './hooks/useJobs';
import useWorker from './hooks/useWorker';

function App() {

  // worker profile API calls. invalid until API works

  // const workerId = '7f90df6e-b832-44e2-b624-3143d428001f'
  // const {getWorker, worker} = useWorker({ workerId })
  
  // useEffect = (() => {
  //   getWorker();
  // },[])

  //fake worker data
  const worker = {
    "workerId":  '7f90df6e-b832-44e2-b624-3143d428001f',
    "firstName": 'Jim',
    "lastName": 'Rose'
  }

  // get users matched Jobs + single job for display in card. invalid until API works
  // const jobPayload = useJobs(worker)

  // const { callbacks, workerJobs, job } = jobPayload


  // fake workerJobs data
  const workerJobs = [
    {
      "jobTitle": "Construction General Helper",
      "jobCompany": "C.D. Barnes & Associates",
      "jobDistance": "5.6 miles",
      "jobHourlyRate": "13.50",
      "Shifts": [`April 7 8:00AM to 6:00PM AEDT`, `April 8 8:00AM to 6:00PM AEDT`],
      "Location":"123 Main Street, Tacoma WA 98409",
      "Requirements": [
        "Safety Vest",
        "Hard Hat",
      ],
      "JobContact": {
        "Name": "Dave",
        "Contact": "(123) 456 789"
      },
      "imageURL": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Construction-257326.jpg"
    },
    {
      "jobTitle": "Construction General Helper",
      "jobCompany": "C.D. Barnes & Associates",
      "jobDistance": "5.6 miles",
      "jobHourlyRate": "13.50",
      "Shifts": [`April 7 8:00AM to 6:00PM AEDT`, `April 8 8:00AM to 6:00PM AEDT`],
      "Location":"123 Main Street, Tacoma WA 98409",
      "Requirements": [
        "Safety Vest",
        "Hard Hat",
      ],
      "JobContact": {
        "Name": "Dave",
        "Contact": "(123) 456 789"
      },
      "imageURL": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Construction-257326.jpg"
    }
  ]

  const job = workerJobs[0]
  
  return (
      <div 
        style={{
          backgroundColor: '#eeeeee', 
          height: '100vh', 
          width: '100vw'
        }} 
      >
        <CssBaseline />
        <Header worker={worker}/>
        <JobCard 
          // callbacks={callbacks}
          workerId={worker.workerId}
          job={job}
        />
      </div>
  );
}

export default App;
