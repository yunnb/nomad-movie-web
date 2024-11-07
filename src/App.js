import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)
        ).json();
        setMovies(json);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);
    
    console.log(movies);
    return (
        <div>
            {loading? <h1>Loading...</h1> :
                <div>{movies.map(movie =>
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                )}</div>
            }
        </div>
    );
}

export default App;
