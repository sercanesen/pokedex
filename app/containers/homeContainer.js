import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as config from '../constants/config'
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
		const nextUrl = this.props.pokemons.next
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
		return <View>
			<View>
				<TouchableHighlight onPress={()=> this.getPokemons()}>
					<Text> Get Pokemons !! </Text>
				</TouchableHighlight>
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