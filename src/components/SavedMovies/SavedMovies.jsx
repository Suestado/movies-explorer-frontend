import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';

function SavedMovies(
  {
    currentUserMovies,
    setCurrentUserMovies,
    screenWidth,
    setIsWaitingDownloading,
    likedMoviesList,
    setLikedMoviesList,
  }) {

  const [shortMoviesActive, setShortMoviesActive] = useState(false);
//-------
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  return <>
    <SearchBlock
      setIsWaitingDownloading={setIsWaitingDownloading}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      likedMoviesList={likedMoviesList}
      setLikedMoviesList={setLikedMoviesList}
      displayedMovies={displayedMovies}
      setDisplayedMovies={setDisplayedMovies}
    />
    <MoviesCardList
      currentUserMovies={currentUserMovies}
      savedMoviesDirectory={true}
      screenWidth={screenWidth}
      likedMoviesList={likedMoviesList}
      displayedMovies={displayedMovies}
      setCurrentUserMovies={setCurrentUserMovies}
    />
  </>;
}

export default SavedMovies;
