import * as actionTypes from './types'
import * as config from '../constants/config';
import apiClient from '../lib/apiClient'

export function getPokemons(nextUrl, params) {
	return (dispatch, getState) => {
		// if response dont have nextUrl built the url with config params
		// passed from homeContainer to actions
		const url 		= nextUrl ? nextUrl : config.get_pokemons_endpoint
		const params 	= nextUrl ? {}		: params
		console.log("next url :")
		console.log(nextUrl)
		console.log("params : ")
		console.log(params)
		
		return apiClient.get(url, params).then(resp => {
			// concatinating new result batch to existing resources to reduce payload
			let pokemonResults = getState().pokemons.pokemonResults ? getState().pokemons.pokemonResults : []
			dispatch(setPokemons({ 
				pokemons: {
					count: resp.count,
					nextUrl: resp.next,
					previousUrl : resp.previous,
					pokemonResults: pokemonResults.concat(resp.results)
				}
			}))
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