import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Metro extends Component {
  static navigationOptions= {
      headerTitle: "地铁"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Metro </Text>
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