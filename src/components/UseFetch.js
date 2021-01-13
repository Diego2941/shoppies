import {useState, useEffect} from 'react'

const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=`;

const useFetch = (title) => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    const fetchMovies = async () => {
        try{
            setError("");
            const response = await fetch(`${url}${title}`);
            const data = await response.json();
            const { Error, Search } = data;
            if (Search){
                setMovies(Search);
            }
            else if(Error){
                setMovies([]);
                setError(Error);
            }else{
                setMovies([]);
                setError("Error occurred please try again");
            }

        }catch(error) {
            console.log(error);
            setMovies([]);
            setError("Error occurred please try again");
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [title]);

    return {error, movies};
}

export default useFetch;
