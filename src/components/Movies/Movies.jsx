import { useState } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ screenWidth }) {
  const [allMoviesList, setAllMoviesList] = useState([]);
  const [isMoviesDounloaded, setIsMoviesDownloaded] = useState(false);

  return <>
    <SearchBlock
      setAllMoviesList={setAllMoviesList}
      setIsMoviesDownloaded={setIsMoviesDownloaded}
    />
    <MoviesCardList
      allMoviesList={allMoviesList}
      isMoviesDounloaded={isMoviesDounloaded}
      screenWidth={screenWidth}
    />
  </>;
}

export default Movies;
