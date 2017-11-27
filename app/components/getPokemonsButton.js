import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'

const GetPokemonsButton = ({ getPokemons }) => (
  <Button
    raised
    onPress={ getPokemons }
    icon={{name: 'autorenew'}}
    title='Get Pokemons'
  />
)

export default GetPokemonsButton