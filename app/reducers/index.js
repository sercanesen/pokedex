import { combineReducers } from 'redux'
import pokemons from './pokemons';

export default combineReducers(Object.assign(
	pokemons,
));