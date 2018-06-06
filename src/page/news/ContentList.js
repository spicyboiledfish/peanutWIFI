import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper';
import {Color} from 'LocalReference'

export default class ContentList extends Component {
  
  render() {
    let arr=[];
    return (
      <View>
        <Swiper 
          dot={<View style={styles.dot}/>}  
          activeDot={<View style={styles.activeDot}/>}  
          paginationStyle={styles.paginationStyle}  
          height={160}
          loop={false}>

          {
              arr.map((item,index)=>{
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
    )
  }
}

const styles = StyleSheet.create({
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