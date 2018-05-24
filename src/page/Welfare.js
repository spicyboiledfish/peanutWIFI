import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Dimensions, ScrollView, Image } from 'react-native';
import add_action from '../action/index';
import {connect} from 'react-redux';
import {Color} from 'LocalReference';


class WelfareHead extends Component {
    render(){
      return(
        <View>

        </View>
      );
    }
}


class Welfare extends Component {
  static navigationOptions = ({navigation}) => {
      console.log(navigation);
       return {
        headerTitle: "福利",
        headerTintColor:Color.HSWhiteColor,
        tabBarVisible:false,
        headerStyle: { backgroundColor: Color.HSHeaderBgColor },
        headerBackTitle: null,
       }
  }

  detailBtn(){
    this.props.navigation.navigate('Detail', { title: '下一页'})
  }

  render() {
    const {count, addCount} = this.props;
    let networkArry = [
        {
          uri:'connect_netSpeed',
          text:'网络测速'
        },
        {
          uri:'connect_netCheck',
          text:'网络诊断'
        },
        {
          uri:'connect_netDes',
          text:'网络流量'
        }
      ]
    return (
      <ScrollView style={styles.bigBox}>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="light-content"
        />
        <View style={styles.bigBoxView}>
          <View style={styles.networkBox}>
            <View style={styles.wifiView}>
              <Image source={{uri: 'connect_success'}} style={{width:30,height:30}} />
              <Text>已连接Quark-Test</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            {
              networkArry.map((item,index)=>{
                  return(
                    <View key={index}>
                        <Image source={{uri: item.uri}} style={{width:50, height:50}} />
                        <Text>{item.text}</Text>
                    </View>
                  );
              })
            }
            </View>
            <Text>点击切换地铁WiFi</Text>
            <View>
              <Text>38.26G 已省流量</Text>
              <Text>1170元 已省话费</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>查看数字：{count}</Text>
            <TouchableOpacity onPress={()=>addCount()} style={styles.addBtn}>
              <Text> +1 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.detailBtn()} style={styles.detailBtn}>
              <Text> 点击进入详情 </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                  <Text></Text>
                </View>
            </TouchableOpacity>   
          </View>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    bigBox:{
      flex:1,
      backgroundColor: Color.HSGrayBgColor,
    },
    container: {
       margin:100,
       alignItems:'center',
    },
    addBtn:{
       width:50,
       height:20,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: 'orange',
    },
    detailBtn:{
      margin:50,
      width:100,
      height:40,
      justifyContent:'center',
       alignItems:'center',
       backgroundColor: 'yellowgreen',
    },
    topBox:{
      width: Dimensions.get('window').width * 0.9,
      height: 600,
      borderRadius: 10,
      backgroundColor:Color.HSWhiteColor,
    },
    networkBox:{
      width: Dimensions.get('window').width * 0.9,
      height: 150,
      borderRadius: 6,
      backgroundColor:Color.HSWhiteColor,
    },
    bigBoxView:{
      justifyContent:'center',
      alignItems:'center'
    },
    wifiView:{
      flexDirection: 'row',
    }
})

const mapStateToProps = (state) => ({
    count: state.addReducer.count,
  
})

const mapDispatchToProps = (dispatch) =>({
    addCount: ()=>{
      dispatch(add_action())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Welfare);