import { useGlobalContext } from './AppProvider';

const Movie = () => {
    
    const { movie } = useGlobalContext();

    if (!movie){
        return <></>
    }

    return (
        <section className="movie">
            <a href={movie.Poster}><img src={movie.Poster} alt={movie.Title}/></a>
            <div className="movie-info">
                <h2>Movie Details</h2>
                <h3>Title: {movie.Title}</h3>
                <h3>Year: {movie.Year}</h3>
                <h3>Type: {movie.Type}</h3>
                <h3>imdbID: {movie.imdbID}</h3>
            </div>
        </section>
    )
}

export default Movie
