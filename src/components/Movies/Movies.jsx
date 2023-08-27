import { useState, useEffect } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies(
  {
    screenWidth,
    setCurrentUserMovies,
    foundMoviesList,
    setFoundMoviesList,
    isWaitingDownloading,
    setIsWaitingDownloading,
  }) {

  const [shortMoviesActive, setShortMoviesActive] = useState(
    localStorage.getItem('checkboxStatus') ?
      JSON.parse(localStorage.getItem('checkboxStatus')) :
      false,
  );
  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);
  //------
  const [displayedMovies, setDisplayedMovies] = useState([]);

  return <>
    <SearchBlock
      foundMoviesList={foundMoviesList}
      setFoundMoviesList={setFoundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
      displayedMovies={displayedMovies}
      setDisplayedMovies={setDisplayedMovies}
    />

    {isWaitingDownloading && <Preloader/>}
    {(!isWaitingDownloading && displayedMovies.length > 0) &&
      <MoviesCardList
        foundMoviesList={displayedMovies}
        screenWidth={screenWidth}
        setCurrentUserMovies={setCurrentUserMovies}
        displayedMovies={displayedMovies}
      />
    }
    {(!isWaitingDownloading && displayedMovies.length === 0) &&
      <NotificationBox
        moviesDownloadingError={moviesDownloadingError}
      />}
  </>;
}

export default Movies;
