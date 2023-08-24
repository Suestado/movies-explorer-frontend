import { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const [movieList, setMovieList] = useState([]);
  const [moviesOnPage, setMoviesOnPage] = useState(0);



  useEffect(() => {
    setMovieList(props.allMoviesList?.slice(0, moviesOnPage));
  }, [props.isMoviesDounloaded, moviesOnPage]);

  useEffect(() => {
    setMoviesOnPage(showStartMovies());
  }, [props.isMoviesDounloaded]);

  function showStartMovies() {
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

  return <>
    <section className={`moviesCardList ${props.isMoviesDounloaded &&"moviesCardList_active"}`}>
      {movieList?.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieItem={movie}
          />);
      })}
    </section>
    <div className={`moreMovies ${props.isMoviesDounloaded &&"moreMovies_active"}`}>
      <button
        className="moreMovies__button"
        onClick={showMoreMovies}
      >Ещё
      </button>
    </div>
  </>;

}

export default MoviesCardList;
