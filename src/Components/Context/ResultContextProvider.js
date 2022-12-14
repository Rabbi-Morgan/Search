import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Steve Jobs')

    const getResults = async (reqType) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${reqType}`, {
            method: 'GET',
            headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'EU',
    'X-RapidAPI-Key': 'cc825c1382mshe0fa737e2c525cfp121a02jsn7c52cfe81f9e',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
  }
        })
        const data = await response.json();
        console.log(data)
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setIsLoading, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);