import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Text, View, TouchableHighlight } from 'react-native'

const PokemonDetails = ({ pokemonsDetails, visibility, setDetailModelVisibility }) => (
	<Modal
        animationType= "slide"
        transparent={ false }
        visible={ visibility }
        onRequestClose={() => setDetailModelVisibility(false)}>
        <View style={{marginTop: 22}}>
        	<View>
	            <Text>Sercan</Text>
	            <TouchableHighlight>
	            <Text>Hide Modal</Text>
	            </TouchableHighlight>
          	</View>
        </View>
    </Modal>
)

export default PokemonDetails