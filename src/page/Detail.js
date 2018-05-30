import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import {Color} from 'LocalReference';

export default class Detail extends Component {
    static navigationOptions = {
        title: '第二页',
        headerBackTitle: null,
      };
  render() {
    return (
      <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="default"
        />
        <Text> Detail </Text>
      </View>
    )
  }
}