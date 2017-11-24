/**
 * Purpose  :   Simple React Native Applcation with Redux state manager
 * Author   :   Sercan Esen
 * Github   :   https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reducer from './app/reducers'
import { createStore, combineReducers } from 'redux'
import {
  Text,
  View
} from 'react-native';

let store = createStore(reducer)

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>
            POKEDEX!
          </Text>
        </View>
      </Provider>
    );
  }
};
