import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxios = (url,options ={}) => {
  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios(url,options);
                console.log(response.data);
                setData(response.data)
            }catch (error){
                console.log(error);
                setError(error);
            } finally{
                setLoading(false);
            }
        }

        fetchData();
    },[]);

    return {data,loading,error};

}

export default useAxios;