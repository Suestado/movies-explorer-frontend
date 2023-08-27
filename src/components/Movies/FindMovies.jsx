import MoviesApi from '../../utils/MoviesApi';
import {
  shortMoviesDuration,
  rusName,
  enName,
  movieDuration,
} from '../../utils/Constants';

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

  _handleFilterMovies(searchStr, shortMoviesActive) {
    if (!shortMoviesActive) {
      return {
        sortedMovies: this._sortMoviesByName(searchStr),
        shortMovies: [],
      };
    } else {
      this._sortMoviesByName(searchStr);

      return {
        sortedMovies: this._filteredByNameMovies,
        shortMovies: this.sortShortMovies(this._filteredByNameMovies),
      };
    }
  }

  sortShortMovies(filteredByNameMovies) {
    return filteredByNameMovies.filter((movie) => {
      return movie[movieDuration] <= shortMoviesDuration;
    });
  }

  async findMovies(searchStr, shortMoviesActive, readyMoviesCollection) {

    if (readyMoviesCollection) {
      this._fullMoviesList = readyMoviesCollection;
      return this._handleFilterMovies(searchStr, shortMoviesActive);
    }

    await this._downloadAllMovies();
    return this._handleFilterMovies(searchStr, shortMoviesActive);
  }
}

const FindMovies = new FindMoviesClass;

export default FindMovies;
