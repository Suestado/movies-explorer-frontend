import MoviesApi from '../../utils/MoviesApi';

class FindMoviesClass {
  constructor() {
    this._searchStr = '';
    this._fullMoviesList = [];
    this._filteredByNameMovies = [];
    this._filteredShortMovies = [];
    this._shortMoviesDuration = 40; //TODO перенести отсюда часть в константы и сюда импортировать
    this._rusName = 'nameRU'; //TODO перенести отсюда часть в константы и сюда импортировать
    this._enName = 'nameEN'; //TODO перенести отсюда часть в константы и сюда импортировать
    this._movieDuration = 'duration'; //TODO перенести отсюда часть в константы и сюда импортировать
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
    this._filteredShortMovies = this._filteredByNameMovies.filter((movie) => {
      return movie[this._movieDuration] <= this._shortMoviesDuration;
    })
  }

  async findMovies(searchStr, shortMoviesActive) {
    if (searchStr === this._searchStr && !shortMoviesActive && this._filteredByNameMovies.length > 0) {
      return this._filteredByNameMovies;
    }

    if (searchStr === this._searchStr && shortMoviesActive) {
      if (this._filteredShortMovies.length > 0) {
        return this._filteredShortMovies;
      } else {
        this._sortShortMovies();
        return this._filteredShortMovies;
      }
    }

    await this._downloadAllMovies()
      .then(() => {
        this._sortMoviesByName(searchStr);
        if (shortMoviesActive) {
          this._sortShortMovies();
        }
      });

    return shortMoviesActive ? this._filteredShortMovies : this._filteredByNameMovies;
  }

}

const FindMovies = new FindMoviesClass;

export default FindMovies;
