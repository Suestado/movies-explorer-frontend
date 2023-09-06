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
  }, [currentUserMovies]);

  function convertTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }

  function handleImgClick() {
    window.open(movieItem.trailerLink, '_blank')
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
      movieItem.image.formats.thumbnail.url,
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
    const cardId = movieItem._id || currentUserMovies.filter((movie) => {
      return movie.movieId === movieItem.id;
    })[0]._id;

    MainApi.deleteLikedMovie(cardId)
      .then(() => {
        setCurrentUserMovies(currentUserMovies.filter((movie) => movie._id !== cardId));
      })
      .then(() => {
        setIsMovieLiked(false);
      })
      .catch((err) => {
        console.log(`При удалении фильма произошла ошибка: ${err}`);
      });
  }

  function handleMovieLike() {
    if (!isMovieLiked) {
      handleLike();
    } else {
      handleDislike();
    }
  }

  function handleMovieUnlike() {
    handleDislike();
  }

  return <article className="movie">
    <img
      className="movie__picture"
      src={`https://api.nomoreparties.co${movieItem.image?.formats?.thumbnail?.url || movieItem.thumbnail}`}
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
        onClick={handleMovieUnlike}
      />
      }
    </div>
  </article>;
}

export default MovieCard;
