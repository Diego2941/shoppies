import { useGlobalContext } from './AppProvider';
import { CgAdd } from 'react-icons/cg'

const Results = () => {
    const { searchTitle, nominations, movies, error, setNominations, setMovie } = useGlobalContext();

    const msg = searchTitle && error ? error : "Use Search bar to Search"
    const title = searchTitle.length < 20 ? searchTitle : searchTitle.substring(1, 21) + "..."

    const addNomminations = (movie) => {
        nominations.length >=5 ? alert("You have reach maximum of 5 nominations") :
        setNominations(nominations => [movie, ...nominations]);
    }

    const inNomination = (movie) => {
        return nominations.some((item) => item.imdbID === movie.imdbID)
    }

    return (
        <section className="results">
            <h2> Results for "{title}" </h2>
            
            <ul>
                { 
                    movies.length < 1 ? <h2>{msg}</h2> :
                    movies.map((item) => {
                        return (
                        <li key={item.imdbID} className="list">
                            <h3 className="movie-title" onClick={() => setMovie(item)}>{item.Title} ({item.Year})</h3>
                            
                            { 
                                inNomination(item) ? "" : <CgAdd className="icon" onClick={() => addNomminations(item)}/>
                            }
                        </li>)
                    })
                }
            </ul>
        </section>
    )
}

export default Results
