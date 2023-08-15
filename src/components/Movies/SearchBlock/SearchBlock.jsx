import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock() {
  return <section className="searchBlock">
    <SearchString/>
    <FilterCheckbox
      text="Короткометражки"
    />
  </section>;
}

export default SearchBlock;
