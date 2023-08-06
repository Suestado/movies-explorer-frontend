import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';

function SavedMovies({ screenWidth }) {
  return <>
    <SearchBlock/>
    <MoviesCardList
      savedMoviesDirectory={true}
      screenWidth={screenWidth}
    />
  </>;
}

export default SavedMovies;
