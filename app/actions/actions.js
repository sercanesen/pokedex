import * as actionTypes from './types'
import * as config from '../constants/config';
import apiClient from '../lib/apiClient'

// TODO split these file into different actions
export function getPokemons(nextUrl, paramaters) {
	const url 		= nextUrl ? nextUrl : config.get_pokemons_endpoint
	const params 	= nextUrl ? {}		: paramaters
	return (dispatch, getState) => {
		// if response dont have nextUrl built the url with config params
		// passed from homeContainer to actions
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

export function getPokemonDetails(url) {
	console.log("inside get Pokemon detail : ")
	console.log(url)
	return (dispatch, getState) => {
		return apiClient.get(url).then(resp => {
			let pokemonDetails = getState().pokemonDetails ? resp : {}
			dispatch(setPokemonDetails({
				pokemonDetails: pokemonDetails
			}))
		}).catch((ex) => {
			console.log(ex)
		})
	}
}

export function setPokemonDetails({ pokemonDetails }) {
	console.log("pokemonDetails")
	console.log(pokemonDetails)
	return {
		type: actionTypes.SET_POKEMON_DETAILS,
		pokemonDetails
	}
}