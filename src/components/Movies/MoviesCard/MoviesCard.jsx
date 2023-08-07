import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MovieCard({ movieItem }) {
  const [isMovieLiked, setIsMovieLiked] = useState(false);
  const { pathname } = useLocation();

  function handleMovieLike() {
    setIsMovieLiked(!isMovieLiked);
  }

  return <article className="movie">
    <img
      className="movie__picture"
      src={movieItem.cover}
      alt={movieItem.name}/>
    <div className="movie__description">
      <h2 className="movie__name">{movieItem.name}</h2>
      <p className="movie__duration">{movieItem.duration}</p>

      {pathname === '/movies' ? <button
        className={`movie__like ${isMovieLiked && 'movie__like_active'}`}
        onClick={handleMovieLike}
      /> : <button
        className="movie__delete"
      />
      }
    </div>
  </article>;
}

export default MovieCard;
