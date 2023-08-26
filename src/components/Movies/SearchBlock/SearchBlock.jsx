import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock(
  {
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
  },
) {

  return <section className="searchBlock">
    <SearchString
      setFoundMoviesList={setFoundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
    />
    <FilterCheckbox
      text="Короткометражки"
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
    />
  </section>;
}

export default SearchBlock;
