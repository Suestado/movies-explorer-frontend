import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchString from '../SearchString/SearchString';

function SearchBlock(
  {
    foundMoviesList,
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    likedMoviesList,
    setLikedMoviesList,
    displayedMovies,
    setDisplayedMovies
  },
) {

  return <section className="searchBlock">
    <SearchString
      foundMoviesList={foundMoviesList}
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
      setIsWaitingDownloading={setIsWaitingDownloading}
      setMoviesDownloadingError={setMoviesDownloadingError}
      likedMoviesList={likedMoviesList}
      setFoundMoviesList={setFoundMoviesList}
      setLikedMoviesList={setLikedMoviesList}
      displayedMovies={displayedMovies}
      setDisplayedMovies={setDisplayedMovies}
    />
    <FilterCheckbox
      text="Короткометражки"
      shortMoviesActive={shortMoviesActive}
      setShortMoviesActive={setShortMoviesActive}
    />
  </section>;
}

export default SearchBlock;
