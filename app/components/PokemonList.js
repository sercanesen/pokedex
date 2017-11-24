import React from 'react'
import PropTypes from 'prop-types'
import PokemonItem from './PokemonItem'

const PokemonList = ({ pokemons, onPokemonItemClick }) => (
  <ul>
    {pokemons.map((pokemon, index) => (
      <PokemonItem key={index} {...pokemon} onClick={() => onPokemonItemClick(index)} />
    ))}
  </ul>
)

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPokemonItemClick: PropTypes.func.isRequired
}

export default PokemonList