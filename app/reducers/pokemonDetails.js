import createReducer from "../lib/createReducer"
import * as actionTypes from "../actions/types"

export const pokemonDetails = createReducer({}, {
	[actionTypes.SET_POKEMON_DETAILS](state, action) {
		let updatedState = action.pokemonDetails
		return updatedState
	}
})