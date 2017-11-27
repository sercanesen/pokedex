import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as config from '../constants/config'
import PokemonList from '../components/pokemonList'
import { 
	Text, 
	View, 
	TouchableHighlight,
	Image,
	ScrollView,
	StyleSheet 
} from 'react-native';

class HomeContainer extends Component {

	constructor(props) {
		super(props)
	}

	getPokemons() {
		// assign next url to be fetched from previous call into store
		const nextUrl = this.props.pokemons.nextUrl
		// get initial call parameters from config
		// there is a url builder with escape uri code in apiClient
		// in case we need to set different calls based on the state change
		const params = 	{
			offset 	: config.offset,
			limit	: config.limit
		}
		this.props.getPokemons(nextUrl, params)
		console.log(this.props.pokemons)
	}

	render() {
		const pokemons = this.props.pokemons.pokemonResults ? this.props.pokemons.pokemonResults : []
		return <View>
			<View>
				<ScrollView>
					<PokemonList pokemons = { pokemons }/>
					<TouchableHighlight onPress={()=> this.getPokemons()}>
						<Text> Get Pokemons !! </Text>
					</TouchableHighlight>
				</ScrollView>	
			</View>
		</View>
	}
}

function mapStateToProps(state) {
	return {
		pokemons: state.pokemons
	}
}

export default connect(mapStateToProps)(HomeContainer);