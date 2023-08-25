import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock(
  {
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
  },
) {

  return <section className="searchBlock">
    <SearchString
      setFoundMoviesList={setFoundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
    />
    <FilterCheckbox
      text="Короткометражки"
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
    />
  </section>;
}

export default SearchBlock;
