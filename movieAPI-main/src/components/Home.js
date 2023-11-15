import React , { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import MovieCard from '../MovieCard';

export default function Home() {
    const API_URL = 'https://omdbapi.com?apikey=8424b56e';
    /**movies is a state variable created using useState, 
     * initialized as an empty array. It will hold the list of movies obtained from the API search. */
    const [movies, setMovies] = useState([]);
    /** state variable created using useState, 
     * initially set to an empty string. It represents the user's input for movie search. */
    const [searchTerm, setSearchTerm] = useState([]);
    const navigate = useNavigate();
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search);
    }
    useEffect(() => {
      searchMovies('Bourne');
    }, []);

    const favoriteFunction = () => {
        navigate('./Favorites')
    }
    return (
        <div className="app">
            <div className='topNav'>
                <h1>Movie App</h1>
                <div className='rightSideNav'>
                    <div className="search">
                        <input
                            placeholder="Search for Movie..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value) }}
                        />
                        <img
                            src=
                            "https://img.icons8.com/?size=1x&id=vxb187PxGIAw&format=png"
                            alt="search icon"
                            onClick={() => searchMovies(searchTerm)}
                        />
                    </div>
                    <button className='favoriteBtn' onClick={favoriteFunction}>My favorites</button>
                </div>
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }
        </div>
    )
}
