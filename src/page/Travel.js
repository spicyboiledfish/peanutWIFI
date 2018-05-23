import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Travel extends Component {
  static navigationOptions = {
      headerTitle:'出行',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> travel </Text>
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