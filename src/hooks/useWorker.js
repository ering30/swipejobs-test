import axios from "axios";
import { useState } from "react";

const useWorker= (props) => {
    const workerId = props.workerId
    const [ worker, setWorker] = useState({});

        // get request for worker profile
        const getWorker = (worker_id) => {
            axios.get()
            .then((res) => {setWorker(res.data);
            })
            .catch((err) => {
                console.error(err)
            })
        } 

    return {
        worker
    }
}

export default useWorker