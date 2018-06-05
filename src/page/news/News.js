import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import {Color} from 'LocalReference'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import ContentList from './ContentList'

class NewsNavLeft extends Component{
  render(){
    return(
      <View>
        <Text style={{marginHorizontal:20}}>上海</Text>
      </View>
    );
  }
}

class NewsNavCenter extends Component{
  render(){
    return(
      <View style={{flexDirection:'row', padding:0,margin:0}}>
        <View style={{width:300, borderRadius:15, justifyContent:'center', alignContent:'center',height:30, marginLeft:50, paddingLeft:50,backgroundColor:Color.HSSixEColor}}>
            <Text style={{color:Color.HSSix6Color}}>顶级球星的老婆都是什么样子的？</Text>
        </View>
      </View>
    );
  }
}


export default class News extends Component {
  static navigationOptions = {
    headerTitle: <NewsNavCenter/>,
    headerLeft: <NewsNavLeft />,
    headerStyle:{
      borderBottomColor: Color.HSTransparent,
    }
 }

 _renderTabBar(){
    return(
      <ScrollableTabBar />
    );
 }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="default"
        />
        <ScrollableTabView renderTabBar={() => this._renderTabBar()}>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
          <ContentList tabLabel="React"/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop:20
  },
})

