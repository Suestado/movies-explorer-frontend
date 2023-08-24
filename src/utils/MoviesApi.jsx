import Api from './Api';

class MoviesApiClass extends Api {
  constructor({ baseURL, headers }) {
    super({ baseURL, headers });
    this._miviesPostfix = '/movies';
  }

  getMovies() {
    return this._request(
      'GET',
    );
  }
}

const MoviesApi = new MoviesApiClass({
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MoviesApi;
