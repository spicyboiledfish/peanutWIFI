import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import {Color} from 'LocalReference';
import NavItem from '../navigators/NavItem'

export default class Detail extends Component {
    static navigationOptions = ({navigation}) =>{
      return{
        title: '第二页',
        headerBackTitle: null,
        headerStyle:{display: 'none',},
        headerLeft: <NavItem onPress={()=>navigation.goBack()}
                                 leftUri = "news_back_normal"
                                 isImage = {true}/>,
    }
  };    
        
  render() {
    return (
      <View>
        <ScrollView style={{}}>
        <StatusBar
                backgroundColor={Color.HSHeaderBgColor}
                barStyle="default"
          />
          <View style={{width:'100%', height:200}}>
            <ImageBackground source={require('../content/img/bgZLY.png')} style={{width:'100%', height:200}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginTop:20, height:44, justifyContent:'center',paddingLeft:15}}>
                <Image source={{uri:"news_back_normal"}} style={{width:15,height:15}}/>
              </TouchableOpacity>
            </ImageBackground>
          </View>          
        </ScrollView>        
      </View>
    )
  }
}