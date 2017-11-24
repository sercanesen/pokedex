import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
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
		this.state = {
			offset	: 0,
			limit	: 10,
		}
	}

	getPokemons() {
		console.log(this.state)
		this.props.getPokemons(this.state.offset, this.state.limit)
		this.setState({
			offset	: this.state.offset + 10,
			limit	: this.state.limit  + 10
		})
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