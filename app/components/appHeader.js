import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'react-native-elements';

const AppHeader = ({ getPokemons }) => (
	<Header
		leftComponent={{ icon: 'menu', color: '#fff' }}
		centerComponent={{ text: 'POKEMONS', style: { color: '#fff' } }}
		rightComponent={{ icon: 'home', color: '#fff' }}
	/>
)

export default AppHeader