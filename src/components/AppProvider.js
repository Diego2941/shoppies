import { useState, useEffect, useContext, createContext } from 'react'
import useFetch from './UseFetch'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchTitle, setSearchTitle] = useState("");
    const [nominations, setNominations] = useState([]);
    const [movie, setMovie] = useState(null);
    const {error, movies } = useFetch(searchTitle);

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem("Nominations"));
        storage = storage ? storage : [];
        setNominations(storage);
    }, [])

    useEffect(() => {
        localStorage.setItem("Nominations", JSON.stringify(nominations));
    }, [nominations])

    return (
        <AppContext.Provider value={{searchTitle, nominations, movie, movies, error, setSearchTitle, setNominations, setMovie}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export  { AppContext, AppProvider }
