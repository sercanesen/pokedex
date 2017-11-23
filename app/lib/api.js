class Api {

	static headers() {
		return {
			'Accept' 		: 'application/json',
			'Content-Type'	: 'application/json',
			'dataType'		: 'json'
		}
	}

	static get(route) {
		return this.xhr(route, null, 'GET');
	}

	static put(route, params) {
		return this.xhr(route, params, 'PUT');
	}

	static post(route, params) {
		return this.xhr(route, params, 'POST');
	}

	static delete(route, params) {
		return this.xhr(route, params, 'DELETE');
	}

	static xhr(route, params, method) {
		const host 	= 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'
		const url 	= '${host}${route}'
		let options = Object.assign({ method : method }, params ? { body.JSON.stringfy(params) } : null)
		options.headers = Api.headers()
		return fetch(url, options).then( resp => {
			let json = resp.json()
			if(resp.ok) {
				return json
			}
			return json.then(err => { throw err }) 

		});
	}

}