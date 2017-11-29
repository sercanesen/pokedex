import React, {Component} from "react";
import {Modal, Text, View, TouchableHighlight} from "react-native";
import {List, ListItem, Avatar} from "react-native-elements";

class PokemonDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: {},
      weight: '',
      name: '',
      abilities: []
    }
  }

  componentWillReceiveProps(nextProps) {
    // there might be a template in the reducer or actions
    // this seemed more traceable at 3 AM in the morning :)
    if (this.props.pokemonDetails != nextProps.pokemonDetails) {
      const pokemonDetails = nextProps.pokemonDetails
      this.setState({
        images: pokemonDetails.sprites,
        weight: pokemonDetails.weight,
        name: pokemonDetails.name,
        abilities: pokemonDetails.abilities
      })
    }
  }

  render() {
    const name = this.state.name
    const weight = this.state.weight
    const abilities = this.state.abilities
    const image = this.state.images
    return (
      <Modal
        animationType="slide"
        transparent={ false }
        presentationStyle="fullScreen"
        visible={ this.props.visibility }
        onRequestClose={() => this.props.setDetailModelVisibility(false)}>
          <View style={{marginTop: 50}}>
              <Avatar
                xlarge
                source={{uri: image.front_default}}
              />
              <Text>Name : {name}</Text>
              <Text>Weight : {weight}</Text>
              <Text>Abilities : </Text>
              <List>
                {
                  abilities.map((a, i) => (
                    <ListItem
                      key={i}
                      title={a.ability.name}
                    />)
                  )
                }
              </List>
          </View>
      </Modal>
    );
  }
}

export default PokemonDetails