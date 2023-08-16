class Api {
  constructor({ baseURL, headers }) {
    this._request = function (method, postfix = '', body) {
      return fetch(baseURL + postfix, {
        method: method,
        headers: headers,
        body: body,
      })
        .then(this._checkResponse);
    };

    this._checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    };
  }
}

export default Api;
