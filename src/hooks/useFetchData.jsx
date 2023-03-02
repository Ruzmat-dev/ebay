import { useEffect, useState } from 'react'
import instance from "../api/instance";

const useFetchData = (ENDPOINT) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        instance.get(ENDPOINT)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    return data;
}

export default useFetchData