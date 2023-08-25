import { useState } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ screenWidth }) {
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [isMoviesDownloaded, setIsMoviesDownloaded] = useState(false);

  return <>
    <SearchBlock
      setFoundMoviesList={setFoundMoviesList}
    />
    <MoviesCardList
      foundMoviesList={foundMoviesList}
      isMoviesDownloaded={isMoviesDownloaded}
      screenWidth={screenWidth}
    />
  </>;
}

export default Movies;
