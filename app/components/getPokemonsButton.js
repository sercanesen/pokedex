import React, {Component} from "react";
import { Button, Text } from 'native-base';


class GetPokemonsButton extends Component {

  render() {
    return (
      <Button 
        block
        color='#FFD54F' 
        dark
        onPress={ this.props.getPokemons }
      >
          <Text>Get Pokemons</Text>
      </Button>
    );
  }
}

export default GetPokemonsButton