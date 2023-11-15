import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://omdbapi.com?apikey=8424b56e';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Function to fetch movie details
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    // Call the fetch function
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>; // You can display a loading indicator while fetching data
  }

  return (
    <div>
    
=      <div id={movieDetails.imdbID} className="movieDetails" key={movieDetails.imdbID}>
        <div className="movieImgDetails">
          <img src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : "https://via.placeholder.com/400"} alt={movieDetails.Title} />
        </div>
        <div className="movieTypeDetails">
          <h3><span >Type : </span>{movieDetails.Type}</h3> <br></br>
         <h3><span >Title : </span> {movieDetails.Title}</h3><br></br>
         
          <h3><span >Year of release : </span>{movieDetails.Year}</h3> <br></br>
        <h3> <span > Genre : </span> {movieDetails.Genre}</h3> <br></br>
        
          <h3><span > Actors : </span>{movieDetails.Actors}</h3> <br></br>
          <h3><span > Language : </span>{movieDetails.Language}</h3> <br></br>
         
          <h3> <span > totalSeasons : </span>{movieDetails.totalSeasons}</h3> <br></br>

         
         
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
