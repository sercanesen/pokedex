import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'


class GetPokemonsButton extends Component { 

    render() {
    	return (
	        <Button
				raised
				onPress={ this.props.getPokemons }
				icon={{name: 'autorenew'}}
				title='Get Pokemons'
			/>
    	);
  	}
}

export default GetPokemonsButton