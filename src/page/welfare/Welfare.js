import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import {add_action, fetch_welfare_signup, fetch_welfare_pollen} from '../../action/index';
import {connect} from 'react-redux';
import {Color} from 'LocalReference';
import API from '../../services/API';
import Swiper from 'react-native-swiper';


class Welfare extends Component {
  static navigationOptions = ({navigation}) => {
      // console.log(navigation);
       return {
        headerTitle: "福利",
        headerTintColor:Color.HSWhiteColor,
        tabBarVisible:false,
        headerStyle: { backgroundColor: Color.HSHeaderBgColor, elevation:0, borderBottomWidth: 0 },
        headerBackTitle: null,
       }
  }

  componentDidMount(){
    const {fetch_welfare_signup, fetch_welfare_pollen} = this.props;
    fetch_welfare_signup();
    fetch_welfare_pollen();
  }

  detailBtn(){
    this.props.navigation.navigate('Detail', { title: '下一页'})
  }

  signUpBtn(){
    const {signData} = this.props;
     this.props.navigation.navigate('SignUp', { title: '签到', signData: signData})
  }

  goToSign(){
      console.log('进来了吗')
      alert("签到成功！");
  }

  toIconBtn(item){
    this.props.navigation.navigate(item);
  }


  render() {
    const {count, addCount, signData, pollen} = this.props;
    // const {data} = this.props.signData;
    // if(data){
    //     let title = data.title;
    //     let signList = data.signList;
    // }
    const data = signData.data;
    const title = data && data.title;
    let userTotal = data && data.userTotal;
    let signList = (data && data.signList) || [];

    console.log('莉莉',pollen);

    console.log('嘻嘻',data,title,signList);
    let networkArry = [
        {
          uri:'connect_netSpeed',
          text:'网络测速',
          name:'Speed',
        },
        {
          uri:'connect_netCheck',
          text:'网络诊断',
          name:'TestNet',
        },
        {
          uri:'connect_netDes',
          text:'网络流量',
          name:'Flow',
        }
      ];
    let signDay = [1,2,3,4,5,6,7];
    return (
        <View style={{flex:1, backgroundColor: Color.HSHeaderBgColor}}>


      <ScrollView style={styles.bigBox}>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="light-content"
        />
        <View style={styles.bigBoxView}>
          <View style={styles.heightView}>
            <View style={styles.circleView}>

            </View>
          </View>

          <View style={styles.networkBox}>
              <View style={styles.networkTop}>
                <View style={styles.wifiView}>
                  <Image source={{uri: 'connect_success'}} style={{width:20,height:20}} />
                  <Text style={styles.connectText}>已连接XiaoMi-307</Text>
                </View>
                <Text style={styles.wifiColor}>点击切换地铁WiFi</Text>
              </View>
            <View style={{flexDirection:'row', marginTop:15}}>
            {
              networkArry.map((item,index)=>{
                  return(
                    <TouchableOpacity key={index} style={styles.iconView} onPress={()=>{this.toIconBtn(item.name)}}>
                        <Image source={{uri: item.uri}} style={{width:40, height:40}} />
                        <Text style={{fontSize:13, marginTop:8,color: Color.HSSix8Color}}>{item.text}</Text>
                    </TouchableOpacity>
                  );
              })
            }
            </View>

            <View style={styles.netBottom}>
              <Text style={{flex:1, textAlign:'center', justifyContent:'center'}}>38.26G <Text style={{color: Color.HSSix6Color}}>已省流量</Text></Text>
              <Text style={{flex:1, textAlign:'center', justifyContent:'center'}}>1170元 <Text style={{color: Color.HSSix6Color}}>已省话费</Text></Text>
            </View>
          </View>

          {/* 签到 */}
          <View style={styles.signUp}>
              <View style={styles.signUpTop}>
                  <Text style={{marginLeft:15, color: Color.HSSix6Color}}>{title}</Text>
                  <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={()=>this.signUpBtn()}>
                      <Text style={{fontSize:13, flex:1, textAlign:'right', marginRight:5, color: Color.HSSixCColor}}>查看更多</Text>
                      <Image source={{uri:'arrowhead'}} style={{width:8,height:14, marginRight:15}}/>
                  </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row', marginTop:15}}>
              {
                signList.map((item,index)=>{
                    console.log('嘿嘿',item.signDay);
                    console.log('查看',index);
                      return(
                          <View style={styles.daySign} key={index}>
                              <Text style={{fontSize:10, color: Color.HSSix9Color, marginBottom:5}}>第{item.signDay}天</Text>
                              <ImageBackground style={{width:36,height:39}} source={{uri:item.picUrl ? item.picUrl : ''}}> 
                                { item.signDay == userTotal ? <Image source={{uri:'sign_ad_suc'}} style={{width:36, height:39}}/> : null}
                                { index == userTotal ? <TouchableOpacity activeOpacity={1}  onPress={()=>{this.goToSign()}}><Image source={{uri:'current_go_sign'}} style={{width:36, height:39}}/></TouchableOpacity> : null}
                              </ImageBackground>
                          </View>
                      );
                  })
                }
              </View>
          </View>

          {/* 游戏广告 */}
          <View style={styles.fangjinsuo}>
            <Image source={require('../../content/img/fjs.png')} style={{width:60, height:40, marginLeft:15, marginRight:20}}/>
            <Text style={{color:Color.HSSix9Color}}>贷款就找房金所</Text>
            <Text style={{color:Color.HSConnectTextColor, flex:1, textAlign:'right', marginRight:15}}>点击领取</Text>
          </View>

          {/* 花粉福利 */}
          <View style={styles.huafen}>
                <View style={styles.signUpTop}>
                    <Text style={{marginLeft:15, color: Color.HSSix6Color}}>花粉福利</Text>
                    <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                        <Text style={{fontSize:13, flex:1, textAlign:'right', marginRight:5, color: Color.HSSixCColor}}>查看更多</Text>
                        <Image source={{uri:'arrowhead'}} style={{width:8,height:14, marginRight:15}}/>
                    </TouchableOpacity>
                </View>
                <Swiper 
                    key={pollen.length}
                    dot={<View style={styles.dot}/>}  
                    activeDot={<View style={styles.activeDot}/>}  
                    paginationStyle={styles.paginationStyle}  
                    height={160}
                    autoplay={true}
                    autoplayTimeout={3}
                    loop={true}>

                    {
                        pollen.map((item,index)=>{
                            return(       
                                    <Image
                                        key={index} 
                                        source={{uri:item.picUrl}} 
                                        style={{
                                            width:Dimensions.get('window').width-30,
                                            height:95, 
                                            borderRadius:20,
                                            marginTop:10, 
                                            resizeMode:Image.resizeMode.contain
                                    }}/>                                
                            );
                        })
                    }
                    
                </Swiper>   

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
        </View>
    )
  }
}

const styles = StyleSheet.create({
    bigBox:{
      flex:1,
      backgroundColor: Color.HSGrayBgColor,

    },
    container: {
       margin:150,
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
    networkBox:{
      width: Dimensions.get('window').width -30,
      height: 210,
      borderRadius: 6,
      backgroundColor:Color.HSWhiteColor,
        marginTop:-150
    },
    bigBoxView:{
      justifyContent:'center',
      alignItems:'center'
    },
    wifiView:{
      flexDirection: 'row',
        marginTop:25,
        justifyContent:'center',
        alignItems:'center'
    },
    connectText:{
        color: Color.HSConnectTextColor,
        fontSize:18,
        fontWeight:'600',
        marginLeft:5
    },
    networkTop:{
        justifyContent:'center',
        alignItems:'center',
    },
    wifiColor:{
        color: Color.HSSix9Color,
        fontSize:12,
        marginTop:5
    },
    iconView:{
        width: (Dimensions.get('window').width-30) /3,
        justifyContent:'center',
        alignItems:'center',
    },
    netBottom:{
        marginHorizontal:20,
        borderTopWidth:0.5,
        borderTopColor:Color.HSSixCColor,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    circleView:{
        width:600,
        height:600,
        borderRadius:300,
        backgroundColor: Color.HSHeaderBgColor,
        top:-450,
    },
    heightView:{
        height:150,
        overflow:'hidden',
    },
    fangjinsuo:{
        width: Dimensions.get('window').width-30,
        height:60,
        backgroundColor: Color.HSWhiteColor,
        marginTop:15,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center'
    },
    signUp:{
        width: Dimensions.get('window').width-30,
        height:120,
        backgroundColor: Color.HSWhiteColor,
        marginTop:15,
        borderRadius:6,
        flexDirection:'column',
        paddingVertical:15
    },
    signUpTop:{
        flexDirection:'row',
    },
    daySign:{
        width: (Dimensions.get('window').width-30 )/7,
        justifyContent:'center',
        alignItems:'center',
    },
    huafen:{
        width: Dimensions.get('window').width-30,
        height:160,
        backgroundColor: Color.HSWhiteColor,
        marginTop:15,
        borderRadius:6,
        flexDirection:'column',
        paddingTop:15,
        paddingBottom:10
    },
    dot: {  
        backgroundColor: Color.HSHeaderBgColor,  
        opacity: 0.3,  
        width: 8,  
        height: 8,  
        borderRadius: 7,  
        marginLeft: 7,  
        marginRight: 7,  
        zIndex: 1,  
    },  
    activeDot: {  
        backgroundColor: Color.HSHeaderBgColor,  
        width: 8,  
        height: 8,  
        borderRadius: 7,  
        marginLeft: 7,  
        marginRight: 7  
    },  
    paginationStyle: {  
        
    }
})

const mapStateToProps = (state) => ({
    count: state.addReducer.count,

    signData: state.welfareReducer.signData,
    pollen: state.welfareReducer.pollen
})

const mapDispatchToProps = (dispatch) =>({
    addCount: ()=>{
      dispatch(add_action())
    },
    fetch_welfare_signup: ()=>{
        dispatch(fetch_welfare_signup())
    },
    fetch_welfare_pollen: ()=>{
        dispatch(fetch_welfare_pollen())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Welfare);