import Api from './Api';

class MainApiClass extends Api {
  constructor({ baseURL, headers }) {
    super({ baseURL, headers });
    this._signinPostfix = '/signin';
    this._signupPostfix = '/signup';
    this._userMePostfix = '/users/me';
    this._miviesPostfix = '/movies';
    this._logoutPostfix = '/logout';
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
}

const MainApi = new MainApiClass({
  // baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  baseURL: 'https://api.suestado-diploma.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MainApi;
