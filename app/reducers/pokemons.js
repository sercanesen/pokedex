import createReducer from '../lib/createReducer'
import * as actionTypes from '../actions/types'

export const getPokemons = createReducer(0, {
	[actionTypes.GET_POKEMONS](state, action) {
		return state + 10
	}
})