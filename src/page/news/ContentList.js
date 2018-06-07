import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper';
import {Color} from 'LocalReference'

export default class ContentList extends Component {
  
  render() {
    const {bannerList} = this.props;
    console.log('再看',bannerList)
    return (
      <View style={{height:200}}>
      { bannerList ? 
        <Swiper 
          key={bannerList.length}
          dot={<View style={styles.dot}/>}  
          activeDot={<View style={styles.activeDot}/>}  
          paginationStyle={styles.paginationStyle}  
          height={200}
          autoplay={true}
          autoplayTimeout={3}
          loop={true}>

          {
            bannerList && Array.isArray(bannerList) && bannerList.length>0 ? bannerList.map((item,index)=>{
                  return(    
                        <View key={index} style={styles.slide}>                   
                      
                        <ImageBackground
                                key={index} 
                                source={{uri:item.bannerUrl}} 
                                style={{
                                    width:Dimensions.get('window').width,
                                    height:200,
                                    flex:1, 
                                    justifyContent:'flex-end'
                            }}> 
                            <Text style={{marginBottom:20, width: Dimensions.get('window').width,color:Color.HSWhiteColor, textAlign:'center'}}>{item.title}</Text>
                            </ImageBackground> 
                          </View>                                 
                  );
              }) : ''
          }
          
        </Swiper> :null
      } 
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
    bottom:50,
  },
  slide:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
})