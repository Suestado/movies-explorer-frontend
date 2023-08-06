import SearchBlock from './SearchBlock/SearchBlock';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ screenWidth }) {
  return <>
    <SearchBlock/>
    <MoviesCardList
      screenWidth={screenWidth}
    />
  </>;
}

export default Movies;
