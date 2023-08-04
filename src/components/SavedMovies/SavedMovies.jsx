import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';

function SavedMovies() {
  return <>
    <SearchBlock/>
    <MoviesCardList
      savedMoviesDirectory={true}
    />
  </>;
}

export default SavedMovies;
