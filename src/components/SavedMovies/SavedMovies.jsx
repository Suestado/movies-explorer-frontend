import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';

function SavedMovies(
  {
    currentUserMovies,
    setCurrentUserMovies,
    screenWidth,
    setIsWaitingDownloading,
    shortMoviesActive,
    setShortMoviesActive,
    likedMoviesList,
    setLikedMoviesList,
  }) {

  const { currentUser } = useContext(CurrentUserContext);

  return <>
    <SearchBlock
      setIsWaitingDownloading={setIsWaitingDownloading}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      likedMoviesList={likedMoviesList}
      setLikedMoviesList={setLikedMoviesList}
    />
    <MoviesCardList
      savedMoviesDirectory={true}
      screenWidth={screenWidth}
      likedMoviesList={likedMoviesList}
    />
  </>;
}

export default SavedMovies;
