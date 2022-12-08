import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getData = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const response = await fetch(url);
        const data = await response.json();

        setState( {
            data: data,
            isLoading: false,
            hasError: null
        })
    }
    
    
    useEffect(() => {
        getData()
    }, [url])
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}
