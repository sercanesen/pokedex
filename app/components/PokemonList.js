import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'react-native-elements'

const PokemonList = ({ pokemons, getPokemonDetails }) => (
  <List>
    {
      pokemons.map((pokemon, i) => (
        <ListItem
          button
          onPress={() => getPokemonDetails(pokemon.url) }
          roundAvatar
          key={i}
          title={pokemon.name}
        />
      ))
    }
  </List>
)

export default PokemonList