import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchBlock from '../Movies/SearchBlock/SearchBlock';

function SavedMovies({ screenWidth, foundMoviesList, setFoundMoviesList }) {
  return <>
    <SearchBlock/>
    <MoviesCardList
      savedMoviesDirectory={true}
      screenWidth={screenWidth}
      foundMoviesList={foundMoviesList}
    />
  </>;
}

export default SavedMovies;
