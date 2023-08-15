import { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import testCards from '../../../vendor/testCards';

function MoviesCardList(props) {
  const [movieList, setMovieList] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(0);

  useEffect(() => {
    setMovieList(testCards.slice(0, moviesOnPage));
  }, [moviesOnPage]);

  useEffect(() => {
    setMoviesOnPage(showStartMovies());
  }, []);

  function showStartMovies() {
    let startMoviesQuantity = 0;

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

  function showMoreMovies() {
    let moreMovies = 0;

    if (props.screenWidth > 768) {
      moreMovies = 4;
    } else if (props.screenWidth < 480) {
      moreMovies = 2;
    } else {
      moreMovies = 2;
    }

    setMoviesOnPage(moviesOnPage + moreMovies);
  }

  return <>
    <section className="moviesCardList">
      {movieList.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movieItem={movie}
          />);
      })}
    </section>
    <div className="moreMovies">
      <button
        className="moreMovies__button"
        onClick={showMoreMovies}
      >Ещё
      </button>
    </div>
  </>;

}

export default MoviesCardList;
