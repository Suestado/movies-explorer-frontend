import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock(
  {
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    setDisplayedMovies,
    isLoadingTriggered
  },
) {

  return <section className="searchBlock">
    <SearchString
      shortMoviesActive={shortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
      setDisplayedMovies={setDisplayedMovies}
      isLoadingTriggered={isLoadingTriggered}
    />
    <FilterCheckbox
      text="Короткометражки"
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
    />
  </section>;
}

export default SearchBlock;
