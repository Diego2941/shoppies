import { useGlobalContext } from './AppProvider';
import { CgRemove } from 'react-icons/cg'

const Nominations = () => {

    const { nominations, setNominations, setMovie } = useGlobalContext();

    const removeNomminations = (movie) => {
        const newNominations = nominations.filter((item) => item.imdbID !== movie.imdbID);
        setNominations(newNominations);
    }

    return (
        <section className="nominations">
            <div className="list-title">
                <h2> Nominations </h2>
                <h2> {nominations.length} </h2>
            </div>

            <ul>
                { 
                    nominations.map((item) => {
                        return (
                            <li key={item.imdbID} className="list"> 
                                <h3 className="movie-title" onClick={() => setMovie(item)}>{item.Title} ({item.Year})</h3>
                                <CgRemove className="icon" onClick={() => removeNomminations(item)} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Nominations
