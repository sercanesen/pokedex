class ApiClient {

	static headers() {
		return {
			'Accept' 		: 'application/json',
			'Content-Type'	: 'application/json',
			'dataType'		: 'json'
		}
	}

	static get(url, params) {
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

	static queryParams(params) {
    	return Object.keys(params)
	        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
	        .join('&');
	}

	static xhr(url, params, method) {
		let options = {}
		options.method = method
		options.headers = ApiClient.headers()
		console.log(this.queryParams(params))
		if(params) {
			url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(params);
		}
		console.log(url)
		return fetch(url, options).then( resp => { 
			let json = resp.json()
			if(resp.ok) {
				return json
			}
			return json.then(err => { throw err }) 

		});
	}
}

export default ApiClient