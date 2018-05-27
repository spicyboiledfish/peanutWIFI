import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import {Color} from 'LocalReference';
import NavItem from '../../navigators/NavItem'

export default class SignUp extends Component {
    static navigationOptions = ({navigation}) => {
        console.log('小睿',navigation);
        return {
            headerTitle: '签到',
            headerBackTitle: null,
            headerTintColor:Color.HSSix6Color,
            headerLeft: <NavItem onPress={()=>navigation.goBack()}
                                 leftUri = "news_back_normal"
                                 isImage = {true}/>,
            headerRight: <NavItem onPress={()=>navigation.goBack()}
                                  isImage = {false}
                                  rightUri = "shop_icon_sign" />,
            headerTitleStyle: { color: Color.HSSix6Color, alignSelf: 'center',},
            headerStyle:{ backgroundColor: Color.HSWhiteColor, borderBottomColor: Color.HSTransparent}
        }
    };


    render() {
      return (
        <View style={styles.container}>
          <View style={styles.imageView}>
              <Image source={{uri:"sign_icon_detail"}} style={{width:70,height:60}} />
              <Text style={{marginTop:10, color: Color.HSSix6Color}}>总计签到1天</Text>
          </View>

          <View>

          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: Color.HSWhiteColor,
      width:Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    imageView:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }
})