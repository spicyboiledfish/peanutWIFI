import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Play extends Component {
  static navigationOptions = {
    headerTitle: "玩吧",
 }
  render() {
    return (
      <View style={styles.container}>
        <Text> play </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin:100,
    justifyContent: 'center',
    alignItems:'center',
  }
})