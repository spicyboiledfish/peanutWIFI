import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Detail extends Component {
    static navigationOptions = {
        title: '第二页',
        headerBackTitle: null,
        headerTintColor:'#fff',
      };
  render() {
    return (
      <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
        <Text> Detail </Text>
      </View>
    )
  }
}