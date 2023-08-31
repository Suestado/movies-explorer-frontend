import MoviesApi from './MoviesApi';
import {
  SHORT_MOVIES_DURATION,
  RUS_NAME,
  EN_NAME,
  MOVIE_DURATION,
} from './Constants';

class FindMoviesClass {
  constructor() {
    this._fullMoviesList = [];
    this._filteredByNameMovies = [];
  }

  _downloadAllMovies() {
    return MoviesApi.getMovies()
      .then((res) => {
        this._fullMoviesList = res;
      });
  }

  _sortMoviesByName(searchStr) {
    const targetWords = searchStr.toLowerCase().split(' ');

    this._filteredByNameMovies = this._fullMoviesList.filter((movie) => {
      const rusNameArr = movie[RUS_NAME].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
      const enNameArr = movie[EN_NAME].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');

      const arrForSearch = [...rusNameArr, ...enNameArr];

      return targetWords.reduce(function (included, searchWord) {
        return included || arrForSearch.some((word) => word.indexOf(searchWord) >= 0);
      }, false);
    });

    return this._filteredByNameMovies;
  }

  sortShortMovies(moviesList) {
    return moviesList.filter((movie) => {
      return movie[MOVIE_DURATION] <= SHORT_MOVIES_DURATION;
    });
  }

  async findMovies(searchStr, readyMoviesCollection) {

    if (readyMoviesCollection) {
      this._fullMoviesList = readyMoviesCollection;
      return this._sortMoviesByName(searchStr);
    }

    this._fullMoviesList.length === 0 && await this._downloadAllMovies();

    return this._sortMoviesByName(searchStr);
  }
}

const FindMovies = new FindMoviesClass();

export default FindMovies;
