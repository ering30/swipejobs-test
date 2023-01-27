import axios from "axios"
import { useState, useEffect } from 'react'

const handleAccept = () => {}

const handleReject = () => {}

const useJobs = (props) => {
    const { worker } = props
    const workerId = worker.workerId
    const [ workerJobs, setWorkerJobs ] = useState([])
    const [ job, setJob ] = useState({})
    const [ accept, setAccept ] = useState({})
    const [ reject, setReject ] = useState({})


    // get all jobs that match user & grab info from first job for this card page
    const getWorkerJobs = (workerId) => {
        axios.get(`https://test.swipejobs.com/api/worker/${workerId}/matches`)
        .then((res) => {setWorkerJobs(res.data);
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(setJob(workerJobs[0]))
    }

    // unsure of data structure/ how accept and reject endpoints function
    const handleAccept = (workerId, job) => {
        const jobid = job.job_id
        axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobid}/accept`)
        .then((res) => {
            setAccept(res.data);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    // unsure of data structure/ how accept and reject endpoints function
    const handleReject = (workerId, job) => {
        const jobid = job.job_id
        axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobid}/reject`)
        .then((res) => {
            setReject(res.data);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return {
        callbacks: {
            handleAccept: (workerId) => handleAccept(workerId),
            handleReject: (workerId) => handleReject(workerId),
        },
        workerJobs,
        job
    }
}

export default useJobs