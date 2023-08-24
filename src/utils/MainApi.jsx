import Api from './Api';

class MainApiClass extends Api {
  constructor({ baseURL, headers }) {
    super({ baseURL, headers });
    this._signinPostfix = '/signin';
    this._signupPostfix = '/signup';
    this._userMePostfix = '/users/me';
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

  findUserMe() {
    return this._request(
      'GET',
      this._userMePostfix,
    );
  }

  logOut() {
    return this._request(
      'GET',
      this._logoutPostfix,
    );
  }
}

const MainApi = new MainApiClass({
  baseURL: 'https://api.suestado-diploma.nomoredomains.xyz',
  // baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MainApi;
