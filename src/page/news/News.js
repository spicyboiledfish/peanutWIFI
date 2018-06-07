import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar,Dimensions } from 'react-native'
import {Color} from 'LocalReference'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import ContentList from './ContentList'
const DeviceWidth = Dimensions.get('window').width;
import Swiper from 'react-native-swiper';
import {fetch_news_banner} from '../../action/index';
import {connect} from 'react-redux';


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


class News extends Component {
  static navigationOptions = {
    headerTitle: <NewsNavCenter/>,
    headerLeft: <NewsNavLeft />,
    headerStyle:{
      backgroundColor: Color.HSWhiteColor,
      borderBottomColor: Color.HSTransparent,
    }
 }

 componentDidMount(){
   const {fetch_news_banner} = this.props;
   fetch_news_banner();
 }

 _renderTabBar(){
    return(
      <ScrollableTabBar 
          activeTextColor={Color.HSHeaderBgColor}
          inactiveTextColor={Color.HSSix6Color}
          textStyle={{width:40,textAlign:'center'}}
          tabStyle={{width:DeviceWidth/6}}
          style={{height:45,marginTop:0, borderBottomWidth:0, backgroundColor:Color.HSWhiteColor}}
          underlineStyle={{
            backgroundColor:Color.HSHeaderBgColor, 
            width:24,
            height:2,             
            marginHorizontal:(DeviceWidth-24*6)/12,
            marginBottom:5,
            justifyContent:'center',
          }}
          />
    );
 }

  render() {
    const {bannerList, fetch_news_banner} = this.props;
    console.log('查看banner',bannerList);
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="default"
        />
        <ScrollableTabView renderTabBar={() => this._renderTabBar()} scrollWithoutAnimation={true}>
            <ContentList tabLabel="有料" bannerList={bannerList}/>
            <ContentList tabLabel="上海"/>
            <ContentList tabLabel="娱乐"/>
            <ContentList tabLabel="汽车"/>
            <ContentList tabLabel="好奇"/>
            <ContentList tabLabel="治愈"/>
            <ContentList tabLabel="时尚"/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  },
})

const mapStateToProps = (state) => ({
  bannerList: state.newsReducer.bannerList,
})

const mapDispatchToProps = (dispatch) =>({
  fetch_news_banner: ()=>{
    dispatch(fetch_news_banner())
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(News);



