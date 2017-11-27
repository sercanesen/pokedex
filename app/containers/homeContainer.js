import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native';
import AppHeader from '../components/appHeader'
import PokemonList from '../components/pokemonList'
import GetPokemonsButton from '../components/getPokemonsButton'
import * as config from '../constants/config'

class HomeContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			params  : {
				offset 	: config.offset,
				limit	: config.limit
			}
		}
	}

	componentWillMount() {
		// before module mount get the initial api call
		// with parameters from system config
		this.props.getPokemons(this.state.nextUrl, this.state.params)
	}

	getPokemonDetails(url) {
		this.props.getPokemonDetails(url)
	}

	getPokemons() {
		// assign next url to be fetched from previous call into store
		this.props.getPokemons(this.props.pokemons.nextUrl, this.state.params)
		console.log(this.props.pokemons)
	}

	render() {
		// yellow box remote debugger warning ignore in the client
		console.ignoredYellowBox = ['Remote debugger'];
		const pokemons = this.props.pokemons.pokemonResults ? this.props.pokemons.pokemonResults : []
		// to prevent scroll height issue {flex:1} attribute should be passed all the way down from parent
		return <View style={{flex:1}}>
			<AppHeader/>
			<ScrollView style={{flex:1}}>
				<PokemonList pokemons = { pokemons } getPokemonDetails={this.getPokemonDetails.bind(this)}/>
				<GetPokemonsButton getPokemons = { this.getPokemons.bind(this) }/>
			</ScrollView>
		</View>
	}
}

function mapStateToProps(state) {
	return {
		pokemons: state.pokemons,
		pokemonDetails: state.pokemonDetails
	}
}

export default connect(mapStateToProps)(HomeContainer);