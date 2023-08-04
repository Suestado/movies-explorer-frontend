import { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import testCards from '../../../vendor/testCards';

function MoviesCardList(props) {
  const [movieList, setMovieList] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(16);

  useEffect(() => {

    setMovieList(testCards.slice(0, moviesOnPage));
  }, [moviesOnPage]);

  function showMoreMovies() {
    setMoviesOnPage(moviesOnPage + 16);
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
      >Ещё</button>
    </div>
  </>;

}

export default MoviesCardList;
