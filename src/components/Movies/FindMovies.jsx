import MoviesApi from '../../utils/MoviesApi';

class FindMoviesClass {
  constructor() {
    this._searchStr = '';
    this._fullMoviesList = [];
    this._filteredByNameMovies = [];
    this._filteredShortMovies = [];
    this._shortMovies = 40;
    this._rusName = 'nameRU';
    this._enName = 'nameEN';
  }

  _downloadAllMovies() {
    return MoviesApi.getMovies()
      .then((res) => {
        this._fullMoviesList = res;
      });
  }

  _sortMoviesByName(searchStr) {
    this._searchStr = searchStr;
    const targetWords = searchStr.toLowerCase().split(' ');

    this._filteredByNameMovies = this._fullMoviesList.filter((movie) => {

      const rusNameArr = movie[this._rusName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
      const enNameArr = movie[this._enName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');

      return targetWords.reduce(function (included, word) {
        return included || rusNameArr.includes(word) || enNameArr.includes(word);
      }, false);
    });
  }

  _sortShortMovies() {

  }

  async findMoviesByName(searchStr) {
    await this._downloadAllMovies()
      .then(() => {
        this._sortMoviesByName(searchStr)
      })

    return this._filteredByNameMovies
  }



}

const FindMovies = new FindMoviesClass;

export default FindMovies;
