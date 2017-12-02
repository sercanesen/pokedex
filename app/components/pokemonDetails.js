import React, {Component} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';

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
        id : pokemonDetails.id,
        images: pokemonDetails.sprites,
        weight: pokemonDetails.weight,
        name: pokemonDetails.name,
        abilities: pokemonDetails.abilities
      })
    }
  }

  render() {
    const id = this.state.id
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
            <Container>
              <Content>
                <Grid>
                  <Row style={{ backgroundColor: '#263238'}} size={55}>
                    <Thumbnail large source={{uri: image.front_default}} />
                    <Text>{name}</Text>
                  </Row>
                  <Row style={{ backgroundColor: '#FFF'}} size={50}>
                    <List>
                      <ListItem itemHeader first>
                        <Text>NAME</Text>
                      </ListItem>
                      <ListItem >
                        <Text>{name}</Text>
                      </ListItem>
                      <ListItem itemHeader>
                        <Text>WEIGHT</Text>
                      </ListItem>
                      <ListItem>
                        <Text>{weight}</Text>
                      </ListItem>
                      <ListItem itemHeader>
                        <Text>ABILITIES</Text>
                      </ListItem>
                      {
                        abilities.map((a, i) => (
                          <ListItem key={i}>
                            <Text>
                              {a.ability.name}
                            </Text>
                          </ListItem>))
                      }
                    </List>
                  </Row>
                </Grid>
              </Content>
            </Container>
      </Modal>
    );
  }
}

export default PokemonDetails