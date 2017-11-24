import * as actionTypes from './types'
import * as config from '../constants/config';
import apiClient from '../lib/apiClient'

export function getPokemons(nextUrl, params) {
	return (dispatch, getState) => {
		const url 		= nextUrl ? nextUrl : config.get_pokemons_endpoint
		const params 	= nextUrl ? {}		: params

		return apiClient.get(url, params).then(resp => {
			dispatch(setPokemons({ pokemons: resp }))
		}).catch((ex) => {
			console.log(ex)
		})
	}
}

export function setPokemons({ pokemons }) {
	return {
		type: actionTypes.SET_POKEMONS,
		pokemons
	}
}