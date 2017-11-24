import React from 'react'
import PropTypes from 'prop-types'

const PokemonItem = ({ onClick, name, id }) => (
  <li onClick={onClick}>
    {name}
    {id}
  </li>
)


PokemonItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default PokemonItem