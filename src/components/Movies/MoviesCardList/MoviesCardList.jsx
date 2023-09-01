import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import MovieCard from '../MoviesCard/MoviesCard';
import FindMovies from '../../../utils/FindMovies';
import {
  WIDE_SCREEN_MOVIES_NUMBER,
  AVERAGE_SCREEN_MOVIES_NUMBER,
  SMALL_SCREEN_MOVIES_NUMBER,
  MID_SCREEN_MOVIES_NUMBER,
  WIDE_SCREEN_MOVIES_INCREASE,
  AVERAGE_SCREEN_MOVIES_INCREASE,
  MID_SCREEN_MOVIES_INCREASE,
  SMALL_SCREEN_MOVIES_INCREASE,
  WIDE_SCREEN_SIZE,
  MINIMUM_AVG_SCREEN_SIZE,
  SMALL_SCREEN_SIZE,
} from '../../../utils/Constants';

function MoviesCardList(
  {
    screenWidth,
    setCurrentUserMovies,
    displayedMovies,
    shortMoviesActive,
  }) {

  const [moviesOnPage, setMoviesOnPage] = useState(0);
  const [isMoreButtonActive, setIsMoreButtonActive] = useState(false);

  const { pathname } = useLocation();
  const { currentUserMovies } = useContext(CurrentUserContext);
  const isMoviesExist = displayedMovies.length > 0;
  const filteredByRadioBtnMovies = shortMoviesActive ?
    FindMovies.sortShortMovies(displayedMovies) : displayedMovies;

  useEffect(() => {
    setMoviesOnPage(setNumberOfMovies);
  }, [screenWidth, displayedMovies]);

  useEffect(() => {
    setIsMoreButtonActive(filteredByRadioBtnMovies.length > moviesOnPage);
  }, [moviesOnPage, filteredByRadioBtnMovies]);


  // Устанавливает начальное кол-во фильмов в выдаче в зависимости от ширины экрана
  function setNumberOfMovies() {
    if (pathname === '/saved-movies') {
      return currentUserMovies.length;
    }

    if (screenWidth >= WIDE_SCREEN_SIZE) {
      return WIDE_SCREEN_MOVIES_NUMBER;
    }
    if (screenWidth >= MINIMUM_AVG_SCREEN_SIZE && screenWidth < WIDE_SCREEN_SIZE) {
      return AVERAGE_SCREEN_MOVIES_NUMBER;
    }
    if (screenWidth >= SMALL_SCREEN_SIZE && screenWidth < MINIMUM_AVG_SCREEN_SIZE) {
      return MID_SCREEN_MOVIES_NUMBER;
    }
    if (screenWidth < SMALL_SCREEN_SIZE) {
      return SMALL_SCREEN_MOVIES_NUMBER;
    }
  }

  // Устанавливает значение, на которое будет увеличиваться кол-во фильмов
  // при нажатии на кнопку Еще в зависимости от ширины экрана
  function handleNumberOfMovies(increase) {
    setMoviesOnPage((prevMoviesOnPage) => prevMoviesOnPage + increase);
  }

  function showMoreMovies() {
    if (screenWidth >= WIDE_SCREEN_SIZE) {
      handleNumberOfMovies(WIDE_SCREEN_MOVIES_INCREASE);
      return;
    }
    if (screenWidth >= MINIMUM_AVG_SCREEN_SIZE && screenWidth < WIDE_SCREEN_SIZE) {
      handleNumberOfMovies(AVERAGE_SCREEN_MOVIES_INCREASE);
      return;
    }
    if (screenWidth >= SMALL_SCREEN_SIZE && screenWidth < MINIMUM_AVG_SCREEN_SIZE) {
      handleNumberOfMovies(MID_SCREEN_MOVIES_INCREASE);
      return;
    }
    if (screenWidth < SMALL_SCREEN_SIZE) {
      handleNumberOfMovies(SMALL_SCREEN_MOVIES_INCREASE);
    }
  }

  return <>
    {
      isMoviesExist &&
      <section className="moviesCardList">
        {filteredByRadioBtnMovies?.slice(0, moviesOnPage)?.map((movie) => {
          return (
            <MovieCard
              key={movie.id || movie._id}
              movieItem={movie}
              setCurrentUserMovies={setCurrentUserMovies}
            />);
        })}
      </section>
    }

    {
      isMoreButtonActive &&
      <div className="moreMovies">
        <button
          className="moreMovies__button"
          onClick={showMoreMovies}
        >Ещё
        </button>
      </div>
    }
  </>;
}

export default MoviesCardList;
