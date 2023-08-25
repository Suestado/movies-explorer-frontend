import { useState } from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import NotificationBox from './NotificationBox/NotificationBox';

function Movies({ screenWidth }) {
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [shortMoviesActive, setShortMoviesActive] = useState(false); //TODO поравить потом на зависимость от стораджа
  const [isWaitingDownloading, setIsWaitingDownloading] = useState(false);


  return <>
    <SearchBlock
      setFoundMoviesList={setFoundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
    />

    {isWaitingDownloading && <Preloader/>}
    {(!isWaitingDownloading && foundMoviesList.length > 0) &&
      <MoviesCardList
        foundMoviesList={foundMoviesList}
        screenWidth={screenWidth}
      />
    }
    {(!isWaitingDownloading && foundMoviesList.length === 0) && <NotificationBox/>}
  </>;
}

export default Movies;
