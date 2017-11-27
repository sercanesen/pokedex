import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'react-native-elements'

const PokemonList = ({ pokemons }) => (
  <List containerStyle={{marginBottom: 20}}>
    {
      pokemons.map((pokemon, i) => (
        <ListItem
          roundAvatar
          avatar={{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}}
          key={i}
          title={pokemon.name}
        />
      ))
    }
  </List>
)

export default PokemonList