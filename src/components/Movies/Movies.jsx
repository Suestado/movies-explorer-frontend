import { useState, useEffect } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies({ screenWidth }) {
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [shortMoviesActive, setShortMoviesActive] = useState(
    localStorage.getItem('checkboxStatus') ?
      JSON.parse(localStorage.getItem('checkboxStatus')) :
      false,
  );
  const [isWaitingDownloading, setIsWaitingDownloading] = useState(false);
  const [moviesDownloadingError, setMoviesDownloadingError] = useState(false);

  //---------------------
  // useEffect(() => {
  //   console.log('отработал мувис стейт');
  // }, foundMoviesList)
  //---------------------

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
      />
    }
    {(!isWaitingDownloading && foundMoviesList.length === 0) &&
      <NotificationBox
        moviesDownloadingError={moviesDownloadingError}
      />}
  </>;
}

export default Movies;
