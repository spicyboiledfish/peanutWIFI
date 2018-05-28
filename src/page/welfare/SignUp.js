import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity,ImageBackground } from 'react-native'
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
      const {signData} = this.props.navigation.state.params;
      let shareArr = [
          { imgUrl: 'invite_fir_sign', text:'邀请好友送VIP'},
          { imgUrl: 'change_sign_vip', text:'金币兑换VIP'},
      ];
      console.log('小睿的哟',signData);
      return (
        <View style={styles.container}>
          <View style={styles.imageView}>
              <Image source={{uri:"sign_icon_detail"}} style={{width:70,height:60}} />
              <Text style={{marginTop:10, color: Color.HSSix6Color}}>总计签到{signData.data.userTotal}天</Text>
          </View>

          <View style={styles.shareView}>
              {
                shareArr.map((item,index)=>{
                    return(
                        <View key={index} style={{flexDirection:'row', flex:1, height:70, justifyContent:'center', alignItems:'center',}}>
                            <Image source={{uri:item.imgUrl}} style={{width:30,height:30, marginRight:10}}/>
                            <Text>{item.text}</Text>
                        </View>
                    );
                })
              }
          </View>

          {/* 签到 */}
          <View style={styles.signUp}>
              <View style={{flexDirection:'row', marginTop:15}}>
              {
                signData.data.signList.map((item,index)=>{
                    console.log(item);
                      return(
                          <View style={styles.daySign} key={index}>
                              <Text style={{fontSize:10, color: Color.HSSix9Color, marginBottom:5}}>第{item.signDay}天</Text>
                              <ImageBackground style={{width:36,height:39}} source={{uri:item.picUrl}}> 
                              { item.signDay == signData.data.userTotal ? <Image source={{uri:'sign_ad_suc'}} style={{width:36, height:39}}/> : null}
                              </ImageBackground>
                          </View>

                      );
                  })
                }
              </View>
          </View>

        {/*领取奖励*/}
        <TouchableOpacity style={{alignItems:'center'}}>
            <View style={styles.bonus}>
                <Text style={{color: Color.HSWhiteColor,}}>领取奖励</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center',marginTop:20}}>
            <Text style={{color:'red', fontSize:10}}>查看规则</Text>
        </TouchableOpacity>

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
    },
    shareView:{
        flexDirection:'row',
        height:70,
        justifyContent:'center',
        marginTop:30,
        borderTopWidth: 1,
        borderTopColor:Color.HSSixCColor,
        borderBottomWidth: 1,
        borderBottomColor:Color.HSSixCColor,
    },
    signUp:{
        width: Dimensions.get('window').width-40,
        marginHorizontal: 20,
        alignItems:'center',
        height:140,
        backgroundColor: Color.HSWhiteColor,
        borderRadius:6,
        flexDirection:'column',
    },
    signUpTop:{
        flexDirection:'row',
    },
    daySign:{
        width: (Dimensions.get('window').width-40 )/7,
        justifyContent:'center',
        alignItems:'center',
    },
    bonus:{
        width:130,
        height:42,
        borderRadius:30,
        borderWidth:1,
        borderColor:Color.HSHeaderBgColor,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Color.HSHeaderBgColor
    }
})