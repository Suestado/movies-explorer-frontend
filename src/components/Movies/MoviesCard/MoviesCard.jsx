import { useState } from 'react';

function MovieCard({ movieItem }) {
  const [isMovieLiked, setIsMovieLiked] = useState(false);

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
      <button
        className={`movie__like ${isMovieLiked && 'movie__like_active'}`}
        onClick={handleMovieLike}
      />
    </div>
  </article>;
}

export default MovieCard;
