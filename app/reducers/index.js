import { combineReducers } from 'redux'
import * as pokemons from './pokemons'
import * as pokemonDetails from './pokemonDetails';

export default combineReducers(Object.assign(
	pokemons,
	pokemonDetails
));