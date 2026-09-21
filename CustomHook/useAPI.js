// API Integration template

import axios from "axios";
import { useState, useEffect } from "react";

function useAPI(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect (() => {

        const fetchAPI = async () => {
            try{

                const responce = await axios.get(url);
                setData(responce.data);

            }catch(error){

                setError(error.message);

            }finally{

                setLoading(false);

            }
        };

        fetchAPI();

    },[url])

    return {data, loading, error};

}

export default useAPI;
