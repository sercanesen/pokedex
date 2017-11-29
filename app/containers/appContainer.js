import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import HomeContainer from './homeContainer';


class AppContainer extends Component {
	render() {
		return 	<HomeContainer {...this.props}/>
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => { 
	return {} 
},  mapDispatchToProps)(AppContainer); 