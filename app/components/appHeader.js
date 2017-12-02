import React, {Component} from "react";
import { Header } from "react-native-elements";

class AppHeader extends Component {
        render() {
        return (
      <Header
        backgroundColor="#263238"
        centerComponent={
				  { text: 'POKEDEX',
				    style: {
				      fontFamily: 'PressStart2P-Regular',
				      color: '#fff',
				      fontSize: 22
				    }
				  }
				}
      />
    )
  }
}

export default AppHeader