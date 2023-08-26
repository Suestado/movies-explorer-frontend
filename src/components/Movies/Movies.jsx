import { useState, useEffect } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies({ screenWidth, setCurrentUserMovies, getUserMoviesList }) {
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [shortMoviesActive, setShortMoviesActive] = useState(
    localStorage.getItem('checkboxStatus') ?
      JSON.parse(localStorage.getItem('checkboxStatus')) :
      false,
  );
  const [isWaitingDownloading, setIsWaitingDownloading] = useState(false);
  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);

  useEffect(() => {
    getUserMoviesList()
  }, [])

  return <>
    <SearchBlock
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
