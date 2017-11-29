class ApiClient {

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json'
    }
  }

  static get(url, params) {
    console.log("api client get :")
    console.log(url)
    return this.xhr(url, params, 'GET');
  }

  static put(url, params) {
    return this.xhr(url, params, 'PUT');
  }

  static post(url, params) {
    return this.xhr(url, params, 'POST');
  }

  static delete(url, params) {
    return this.xhr(url, params, 'DELETE');
  }

  static queryParamsEsc(params) {
    return Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  }

  static xhr(url, params, method) {
    let options = {}
    options.method = method
    options.headers = ApiClient.headers()
    if (params) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParamsEsc(params);
    }
    return fetch(url, options).then(resp => {
      console.log("in fetch")
      console.log(url)
      let json = resp.json()
      if (resp.ok) {
        return json
      }
      return json.then(err => {
        throw err
      })

    });
  }
}

export default ApiClient