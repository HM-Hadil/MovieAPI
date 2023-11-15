import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const API_URL = 'https://omdbapi.com?apikey=8424b56e';

function Favorites() {
    
   const navigate = useNavigate();
   const BackHomePage  = () => {
       navigate('/')
   }

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const ids = JSON.parse(localStorage.getItem('favorites')) || [];
        const promises = ids.map(async (id) => {
          const response = await fetch(`${API_URL}&i=${id}`);
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            console.error(`Failed to fetch movie by ID: ${id}`);
            return null;
          }
        });

        // Wait for all promises to resolve
        const fetchedMovies = await Promise.all(promises);

        // Filter out any null values (failed requests)
        const validMovies = fetchedMovies.filter((movie) => movie !== null);

        // Set the fetched movies in state
        setMovies(validMovies);
      } catch (error) {
        console.error('Error while fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }
    // Call the function to fetch and set movies
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <div className='topNav'>
            <h1>Movie App - Favorites</h1>
            <div className='rightSide'>
                <button className='backHomePage' onClick={BackHomePage}>Home Page</button>
            </div>         
        </div>
        
      <div className="movie-container" >
        {loading ? (
          <h3 style={{color:'white'}}>Loading...</h3>
        ) :  movies.length > 0 ? (
            <div className="movie-card-container" style={{display:'flex',flexWrap:'wrap'}}>
         { movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
            <div className="movieImg">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
        </div>
        <div className="movieType">
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
        </div>
                       
            ))}
            </div>
            ) : (
              <div className="empty">
                <h2>No Movies found</h2>
              </div>       
        )}
      </div>
    </div>
  );
}

export default Favorites;

     

    
      
 
