import { useState, useEffect } from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';
import MainApi from '../../utils/MainApi';

function SavedMovies(
  {
    setCurrentUserMovies,
    screenWidth,
    setIsWaitingDownloading,
  }) {

  const [shortMoviesActive, setShortMoviesActive] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    MainApi.getUserMovies()
      .then((movies) => {
        setCurrentUserMovies(movies);
      })
      .catch((err) => {
        console.log(`При загрузке списка фильмов пользователя произошла ошибка: ${err}`);
      });
  }, []);

  return <>
    <SearchBlock
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setDisplayedMovies={setDisplayedMovies}
    />
    <MoviesCardList
      screenWidth={screenWidth}
      setCurrentUserMovies={setCurrentUserMovies}
      displayedMovies={displayedMovies}
      shortMoviesActive={shortMoviesActive}
    />
  </>;
}

export default SavedMovies;
