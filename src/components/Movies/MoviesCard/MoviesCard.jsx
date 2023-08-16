import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MovieCard({ movieItem }) {
  const [isMovieLiked, setIsMovieLiked] = useState(false);
  const { pathname } = useLocation();

  function handleMovieLike() {
    setIsMovieLiked(!isMovieLiked);
  }

  function convertTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`
  }

  return <article className="movie">
    <img
      className="movie__picture"
      src={`https://api.nomoreparties.co${movieItem.image.formats.thumbnail.url}`}
      alt={movieItem.nameRU}/>
    <div className="movie__description">
      <h2 className="movie__name">{movieItem.nameRU}</h2>
      <p className="movie__duration">{convertTime(movieItem.duration)}</p>

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
