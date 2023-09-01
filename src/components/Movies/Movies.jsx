import { useState, useRef, useEffect } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies(
  {
    screenWidth,
    setCurrentUserMovies,
    getUserMovies,
  }) {

  const [shortMoviesActive, setShortMoviesActive] = useState(
    localStorage.getItem('checkboxStatus') ?
      JSON.parse(localStorage.getItem('checkboxStatus')) :
      false,
  );
  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isWaitingDownloading, setIsWaitingDownloading] = useState(false);

  const isLoadingTriggered = useRef(false);

  useEffect(() => {
    getUserMovies();
  }, []);

  return <>
    <SearchBlock
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
      setDisplayedMovies={setDisplayedMovies}
      isLoadingTriggered={isLoadingTriggered}
    />

    {isWaitingDownloading && <Preloader/>}
    {(!isWaitingDownloading && displayedMovies.length > 0) &&
      <MoviesCardList
        screenWidth={screenWidth}
        setCurrentUserMovies={setCurrentUserMovies}
        displayedMovies={displayedMovies}
        shortMoviesActive={shortMoviesActive}
      />
    }
    {(!isWaitingDownloading && isLoadingTriggered.current && displayedMovies.length === 0) &&
      <NotificationBox
        moviesDownloadingError={moviesDownloadingError}
      />}
  </>;
}

export default Movies;
