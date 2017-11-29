import React, {Component} from "react";
import {Button} from "react-native-elements";


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