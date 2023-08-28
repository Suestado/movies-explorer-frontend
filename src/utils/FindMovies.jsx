import MoviesApi from './MoviesApi';
import {
  shortMoviesDuration,
  rusName,
  enName,
  movieDuration,
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
      const rusNameArr = movie[rusName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
      const enNameArr = movie[enName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');

      return targetWords.reduce(function (included, word) {
        return included || rusNameArr.includes(word) || enNameArr.includes(word);
      }, false);
    });

    return this._filteredByNameMovies;
  }

  sortShortMovies(moviesList) {
    return moviesList.filter((movie) => {
      return movie[movieDuration] <= shortMoviesDuration;
    });
  }

  async findMovies(searchStr, readyMoviesCollection) {

    if (readyMoviesCollection) {
      this._fullMoviesList = readyMoviesCollection;
      return this._sortMoviesByName(searchStr);
    }

    await this._downloadAllMovies();
    return this._sortMoviesByName(searchStr);
  }
}

const FindMovies = new FindMoviesClass;

export default FindMovies;
