import React, {Component} from "react"
import {List, ListItem} from "react-native-elements"

class PokemonList extends Component {

	render() {
		return (
			<List>
				{ this.props.pokemons.map((pokemon, i) => (
					<ListItem
						button
						onPress={() => this.props.getPokemonDetails(pokemon.url) }
						roundAvatar
						key={i}
						fontFamily='Aldrich-Regular'
						title={pokemon.name}
					/>))
				}
			</List>
		)
	}
}

export default PokemonList