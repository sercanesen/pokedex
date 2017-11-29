import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Text, View, TouchableHighlight } from 'react-native'
import { List, ListItem, Tile } from 'react-native-elements'

class PokemonDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images : {},
            weight: '',
            name: '',
            abilities: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // there might be a templating in the reducer or actions
        // this seemed more traceble at 3 AM in the morning :)
        if(this.props.pokemonDetails != nextProps.pokemonDetails) {
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
        const pokemonDetails = this.props.pokemonDetails 
        const weight = this.state.weight
        const abilities = this.state.abilities
        const image = this.state.images
        console.log(image.front_default)
        return (
        <Modal
            animationType = "fade"
            transparent ={ false }
            presentationStyle = "fullScreen"
            visible = { this.props.visibility }
            onRequestClose = {() => this.props.setDetailModelVisibility(false)}>
            <View style = {{marginTop: 50}}>
                <Tile
                    imageSrc = {{img: (this.state.images.front_default)}}
                    title = {pokemonDetails.name}
                    contentContainerStyle={{height: 200}}
                >
                    <View style = {{flex: 2, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Text>Weight : {weight}</Text>
                        <Text>Abilities : </Text>
                        <List >
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
                </Tile>
            </View>
        </Modal>
    );
  }
}

export default PokemonDetails