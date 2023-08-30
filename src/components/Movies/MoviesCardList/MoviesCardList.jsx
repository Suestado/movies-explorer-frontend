import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import MovieCard from '../MoviesCard/MoviesCard';
import FindMovies from '../../../utils/FindMovies';

function MoviesCardList(
  {
    screenWidth,
    setCurrentUserMovies,
    displayedMovies,
    shortMoviesActive,
  }) {

  const [moviesOnPage, setMoviesOnPage] = useState(0);

  const { pathname } = useLocation();
  const { currentUserMovies } = useContext(CurrentUserContext);
  const isMoreButtonActive = displayedMovies.length > moviesOnPage;
  const isMoviesExist = displayedMovies.length > 0;
  const filteredByRadioBtnMovies = shortMoviesActive ?
    FindMovies.sortShortMovies(displayedMovies) : displayedMovies;


  useEffect(() => {
    setMoviesOnPage(setNumberOfMovies);
  }, [screenWidth]);


  // Устанавливает начальное кол-во фильмов в выдаче в зависимости от ширины экрана
  function setNumberOfMovies() {
    if (pathname === '/saved-movies') {
      return currentUserMovies.length;
    }

    if (screenWidth > 768) {
      return 16;
    } else if (screenWidth < 480) {
      return 5;
    } else {
      return 8;
    }
  }

  // Устанавливает значение, на которое будет увеличиваться кол-во фильмов
  // при нажатии на кнопку Еще в зависимости от ширины экрана
  function showMoreMovies() {
    let moreMovies;

    if (screenWidth > 768) {
      moreMovies = 4;
    } else if (screenWidth < 480) {
      moreMovies = 2;
    } else {
      moreMovies = 2;
    }

    setMoviesOnPage((prevMoviesOnPage) => prevMoviesOnPage + moreMovies);
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
