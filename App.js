/**
 * Purpose  :   Simple React Native Applcation with Redux state manager
 * Author   :   Sercan Esen
 * Github   :   https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reducer from './app/reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import AppContainer from './app/containers/appContainer';

// to async call enhance the store by applicaying thunk middleware
let store = createStore(reducer, applyMiddleware(thunk))

export default class App extends Component<{}> {
  render() {
    return (
      	<Provider store={store}>
      		<AppContainer/>
      	</Provider>
    );
  }
};
