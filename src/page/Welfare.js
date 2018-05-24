import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import add_action from '../action/index';
import {connect} from 'react-redux';
import {Color} from 'LocalReference';


class WelfareHead extends Component {
    render(){
      return(
        <View style={styles.topBox}>

        </View>
      );
    }
}


class Welfare extends Component {
  static navigationOptions = ({navigation}) => {
      // console.log(navigation);
       return {
        headerTitle: "福利",
        headerTintColor:Color.HSWhiteColor,
        tabBarVisible:false,
        headerStyle: { backgroundColor: Color.HSHeaderBgColor},
        headerBackTitle:null,
       }
  }

  detailBtn(){
    this.props.navigation.navigate('Detail', { title: '下一页'})
  }

  render() {
    const {count, addCount} = this.props;
    return (
      <View>
        <StatusBar
            backgroundColor={Color.HSHeaderBgColor}
            barStyle="light-content"
        />
        <View style={styles.container}>
          <Text>查看数字：{count}</Text>
          <TouchableOpacity onPress={()=>addCount()} style={styles.addBtn}>
            <Text> +1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.detailBtn()} style={styles.detailBtn}>
            <Text> 点击进入详情 </Text>
          </TouchableOpacity>   
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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