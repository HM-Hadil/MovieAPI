// MovieCard.jsx
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sendMovieToFav = (id) => {

    // Retrieve the existing array from localStorage or make  it as an empty array
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Check if the id is not already in the array  from localStorage
    if (!existingFavorites.includes(id)) {
      // Add the new id to the array
      existingFavorites.push(id);
    
      // updated array  into localStorage
      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
    
      console.log("movie id added: ", id);
    } else {
      console.log("movie id already exists: ", id);
    }
   
  }
/** 
  const MovieDetails = (id) => {
    const navigate = useNavigate();
    // Retrieve the existing ID from localStorage or set it to null
    const storedId = localStorage.getItem('movieDetailsId') || null;
  
    // Check if the provided ID is different from the stored one
    if (id !== storedId) {
      // Update the ID in localStorage
      localStorage.setItem('movieDetailsId', id);
  
      console.log("Movie ID updated:", id);
    } else {
      console.log("Movie ID already exists:", id);
    }

      navigate(`/movieDetails/${id}`);
  };
  */
const MovieCard = ({ movie }) => {
    
    return (
        <div id={movie.imdbID} className="movie" key={movie.imdbID} >
            <div className="movieImg">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>
            <div className="movieType">
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        <div>
      

        <input className="emojiIcon"  onClick={ ()=> sendMovieToFav(movie.imdbID)} type="submit" value="Add To Favorite" />
        <Link to={`/movieDetails/${movie.imdbID}`} activeClassName="active" className="emojiIcon2" >Movie Details</Link>
  </div>
            
       </div>
    )
}
export default MovieCard;