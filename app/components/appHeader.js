import React, {Component} from "react";
import {Header} from "react-native-elements";

class AppHeader extends Component {
  render() {
    return (
			<Header
				centerComponent={{ text: 'POKEDEX', style: {fontFamily: 'PressStart2P-Regular', color: '#fff', fontSize: 22} }}/>
    )
  }
}

export default AppHeader