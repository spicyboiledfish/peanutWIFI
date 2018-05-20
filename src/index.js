/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/index'
import AddCount from './page/component/AddCount';



export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AddCount/>
        </Provider>
      
    );
  }
}
