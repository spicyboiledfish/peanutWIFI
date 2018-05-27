/**
 * Created by Rui on 2018/5/27.
 */

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import {Color} from 'LocalReference'

export default class NavItem extends Component {
    render() {
        const {onPress,isImage, navStyle,leftUri, rightUri } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={{marginLeft:15, marginRight:15}}>
                { isImage ?
                    <Image source={{uri:leftUri}} style={{width:15,height:15}}/>:
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: Color.HSSix6Color}}>金币商城</Text>
                        <Image source={{uri:rightUri}} style={{width:15,height:15, marginLeft:5}}/>
                    </View>
                }

            </TouchableOpacity>
        )
    }
}