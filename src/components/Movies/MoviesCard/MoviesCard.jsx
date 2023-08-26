import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import MainApi from '../../../utils/MainApi';

function MovieCard({ movieItem, setCurrentUserMovies }) {
  const [isMovieLiked, setIsMovieLiked] = useState(false);
  const { pathname } = useLocation();
  const { currentUserMovies } = useContext(CurrentUserContext);

  useEffect(() => {
    currentUserMovies.forEach((movie) => {
      movie.movieId === movieItem.id && setIsMovieLiked(true);
    });
  }, []);

  function convertTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }

  function handleImgClick() {
    window.location.href = movieItem.trailerLink;
  }

  function handleLike() {
    MainApi.saveLikedMovie(
      movieItem.country,
      movieItem.director,
      movieItem.duration,
      movieItem.year,
      movieItem.description,
      `https://api.nomoreparties.co${movieItem.image.formats.thumbnail.url}`,
      movieItem.trailerLink,
      movieItem.nameRU,
      movieItem.nameEN,
      `https://api.nomoreparties.co${movieItem.image.formats.thumbnail.url}`,
      movieItem.id,
    )
      .then((movie) => {
        setIsMovieLiked(!isMovieLiked);
        currentUserMovies.push(movie);
      })
      .catch((err) => {
        console.log(`При установке лайка произошла ошибка: ${err}`);
      });
  }

  function handleDislike() {
    const cardId = currentUserMovies.filter((movie) => {
      return movie.movieId === movieItem.id
    })[0]._id;

    MainApi.deleteLikedMovie(cardId)
      .then(() => {
        setIsMovieLiked(false)
        setCurrentUserMovies(currentUserMovies.filter((movie) => movie._id !== cardId))
      });
  }

  function handleMovieLike() {
    if (!isMovieLiked) {
      handleLike();
    } else {
      handleDislike();
    }
  }

  return <article className="movie">
    <img
      className="movie__picture"
      src={`https://api.nomoreparties.co${movieItem.image.formats.thumbnail.url || movieItem.thumbnail}`}
      alt={movieItem.nameRU}
      onClick={handleImgClick}
    />
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
