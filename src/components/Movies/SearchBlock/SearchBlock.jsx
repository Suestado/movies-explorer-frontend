import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock({ setFoundMoviesList }) {
  return <section className="searchBlock">
    <SearchString
      setFoundMoviesList={setFoundMoviesList}
    />
    <FilterCheckbox
      text="Короткометражки"
    />
  </section>;
}

export default SearchBlock;
