import { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const [movieList, setMovieList] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(0);
  const [thereIsMoreMovies, setThereIsMoreMovies] = useState(false);
  const [movieListReady, setMovieListReady] = useState(false);

  useEffect(() => {
    setMoviesOnPage(setNumberOfMovies());
  }, []);

  useEffect(() => {
    setThereIsMoreMovies(checkMoreMoviesExistence());
  }, [moviesOnPage, movieList]);

  useEffect(() => {
    setMovieList(props.foundMoviesList?.slice(0, moviesOnPage));
    setMovieListReady(true);
  }, [props.foundMoviesList, moviesOnPage]);

  // Устанавливает начальное кол-во фильмов в выдаче в зависимости от ширины экрана
  function setNumberOfMovies() {
    let startMoviesQuantity;

    if (props.screenWidth > 768) {
      startMoviesQuantity = 16;
    } else if (props.screenWidth < 480) {
      startMoviesQuantity = 5;
    } else {
      startMoviesQuantity = 8;
    }

    setMoviesOnPage(startMoviesQuantity);
    return startMoviesQuantity;
  }

  // Устанавливает значение, на которое будет увеличиваться кол-во фильмов
  // при нажатии на кнопку Еще в зависимости от ширины экрана
  function showMoreMovies() {
    let moreMovies;

    if (props.screenWidth > 768) {
      moreMovies = 4;
    } else if (props.screenWidth < 480) {
      moreMovies = 2;
    } else {
      moreMovies = 2;
    }

    setMoviesOnPage(moviesOnPage + moreMovies);
  }

  // Проверка на существование скрытых фильмов в массиве с результатами
  function checkMoreMoviesExistence() {
    console.log(props);
    return props.foundMoviesList.length > moviesOnPage;
  }

  return <>
    <section className={`moviesCardList ${movieListReady && 'moviesCardList_active'}`}>
      {movieList?.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieItem={movie}
            setCurrentUserMovies={props.setCurrentUserMovies}
          />);
      })}
    </section>
    <div className={`moreMovies ${(movieListReady && thereIsMoreMovies) && 'moreMovies_active'}`}>
      <button
        className="moreMovies__button"
        onClick={showMoreMovies}
      >Ещё
      </button>
    </div>
    {}
  </>;

}

export default MoviesCardList;
