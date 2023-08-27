import { useState, useEffect } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies(
  {
    isLoggedIn,
    screenWidth,
    setCurrentUserMovies,
    foundMoviesList,
    setFoundMoviesList,
    isWaitingDownloading,
    setIsWaitingDownloading,
    shortMoviesActive,
    setShortMoviesActive,
  }) {


  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);

  return <>
    <SearchBlock
      isLoggedIn={isLoggedIn}
      foundMoviesList={foundMoviesList}
      setFoundMoviesList={setFoundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
    />

    {isWaitingDownloading && <Preloader/>}
    {(!isWaitingDownloading && foundMoviesList.length > 0) &&
      <MoviesCardList
        foundMoviesList={foundMoviesList}
        screenWidth={screenWidth}
        setCurrentUserMovies={setCurrentUserMovies}
      />
    }
    {(!isWaitingDownloading && foundMoviesList.length === 0) &&
      <NotificationBox
        moviesDownloadingError={moviesDownloadingError}
      />}
  </>;
}

export default Movies;
