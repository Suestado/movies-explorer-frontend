import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock(
  {
    isLoggedIn,
    foundMoviesList,
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    likedMoviesList,
    setLikedMoviesList
  },
) {

  return <section className="searchBlock">
    <SearchString
      isLoggedIn={isLoggedIn}
      foundMoviesList={foundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
      likedMoviesList={likedMoviesList}
      setFoundMoviesList={setFoundMoviesList}
      setLikedMoviesList={setLikedMoviesList}
    />
    <FilterCheckbox
      text="Короткометражки"
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
    />
  </section>;
}

export default SearchBlock;
