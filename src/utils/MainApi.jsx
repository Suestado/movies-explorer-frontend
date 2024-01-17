import Api from './Api';

class MainApiClass extends Api {
  constructor({ baseURL, headers }) {
    super({ baseURL, headers });
    this._signinPostfix = '/signin';
    this._signupPostfix = '/signup';
    this._userMePostfix = '/users/me';
    this._logoutPostfix = '/logout';
    this._likeMoviePostfix = '/movies';
  }

  signupUser(email, password, name) {
    return this._request(
      'POST',
      this._signupPostfix,
      JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    );
  }

  signinUser(email, password) {
    return this._request(
      'POST',
      this._signinPostfix,
      JSON.stringify({
        email: email,
        password: password,
      }),
    );
  }

  findUserMe() {
    return this._request(
      'GET',
      this._userMePostfix,
    );
  }

  updateUser(email, name) {
    return this._request(
      'PATCH',
      this._userMePostfix,
      JSON.stringify({
        email: email,
        name: name,
      }),
    );
  }

  logOut() {
    return this._request(
      'GET',
      this._logoutPostfix,
    );
  }

  getUserMovies() {
    return this._request(
      'GET',
      this._likeMoviePostfix,
    );
  }

  saveLikedMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner,
  ) {
    return this._request(
      'POST',
      this._likeMoviePostfix,
      JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        movieId: movieId,
        owner: owner,
      }),
    );
  }

  deleteLikedMovie(cardId) {
    return this._request(
      'DELETE',
      this._likeMoviePostfix + `/${cardId}`,
    );
  }
}

const MainApi = new MainApiClass({
  // baseURL: 'https://api.suestado-diploma.nomoredomains.xyz',
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MainApi;
