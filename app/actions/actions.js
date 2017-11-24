import * as ActionTypes from './types'
import * as endpoints from '../constants/endpoints';
import apiClient from '../lib/apiClient'

export function getPokemons(offset, limit) {
	return (dispatch, getState) => {

		const url = endpoints.get_pokemons_endpoint
		const params = 	{
			offset 	: offset,
			limit	: limit
		}
	
		return apiClient.get(url, params).then(resp => {
			console.log(resp)
		}).catch((ex) => {
			console.log(ex)
		})
	}
}