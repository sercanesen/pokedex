import { combineReducers } from 'redux'
import * as pokemons from './pokemons';

export default combineReducers(Object.assign(
	pokemons,
));