import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock({ setAllMoviesList, setIsMoviesDownloaded }) {
  return <section className="searchBlock">
    <SearchString
      setAllMoviesList={setAllMoviesList}
      setIsMoviesDownloaded={setIsMoviesDownloaded}
    />
    <FilterCheckbox
      text="Короткометражки"
    />
  </section>;
}

export default SearchBlock;
