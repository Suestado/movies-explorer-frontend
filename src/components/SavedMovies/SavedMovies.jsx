import { useState, useEffect } from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';
import Preloader from '../Movies/Preloader/Preloader';
import NotificationBox from '../Movies/NotificationBox/NotificationBox';

function SavedMovies(
  {
    setCurrentUserMovies,
    screenWidth,
    getUserMovies,
  }) {

  const [shortMoviesActive, setShortMoviesActive] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isWaitingDownloading, setIsWaitingDownloading] = useState(false);
  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);

  useEffect(() => {
    getUserMovies();
  }, []);

  return <>
    <SearchBlock
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setDisplayedMovies={setDisplayedMovies}
      setMoviesDownloadingError={setMoviesDownloadingError}
    />

    {isWaitingDownloading && <Preloader/>}
    {(!isWaitingDownloading && !moviesDownloadingError && displayedMovies.length > 0) &&
      <MoviesCardList
        screenWidth={screenWidth}
        setCurrentUserMovies={setCurrentUserMovies}
        displayedMovies={displayedMovies}
        shortMoviesActive={shortMoviesActive}
      />
    }
    {(!isWaitingDownloading && displayedMovies.length === 0) &&
      <NotificationBox
        moviesDownloadingError={moviesDownloadingError}
      />
    }
  </>;
}

export default SavedMovies;
