import { useEffect, useState } from "react";

const UseFetch=(URL)=>{
    const [data, setData]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(false);

    const fetchData=async()=>{
        setLoading(true);
        try{
            const response=await fetch(URL);
            if(!response.ok)
                throw new Error(response.error);
            const result=await response.json();
            setData(result);
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData(URL);
        console.log(data);
    },[URL])

    return [data, error, loading]
}

export default UseFetch;