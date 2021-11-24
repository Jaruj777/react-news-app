import {useState,useEffect} from 'react'
import axios from 'axios'

export const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'http://newsapi.org/v2/top-headlines?pageSize=3?country=ru&category=sports&apiKey=af47703047f14b4ab1c1e1236df60e44';
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            updateData(response.data); 
        }
        fetchData();
    },[])
    return data;
}