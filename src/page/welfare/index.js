import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import add_action from '../../action/index';
import {connect} from 'react-redux';

class Welfare extends Component {
    static navigationOptions = {
       headerStyle: { display: 'none'},
       headerTitle:'Home'
    }

  render() {
    const {count, addCount} = this.props;
    return (
      <View style={styles.container}>
        <Text>查看数字：{count}</Text>
        <TouchableOpacity onPress={()=>addCount()} style={styles.addBtn}>
          <Text> +1 </Text>
        </TouchableOpacity>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
       margin:100
    },
    addBtn:{
       width:50,
       height:20,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: 'orange',
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