import {createBottomTabNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Welfare from '../page/welfare/Welfare';
import News from '../page/News';
import Metro from '../page/Metro';
import Travel from '../page/Travel';
import Play from '../page/Play';
import React, { Component } from 'react';
import {WelfareNavigator, NewsNavigator, TravelNavigator, PlayNavigator, MetroNavigator} from './Nav';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator(
{
    WelfareNavigator:{ 
        screen: WelfareNavigator,  
        navigationOptions:{ 
            tabBarLabel:'福利',
            tabBarIcon:({focused}) => (  
                <Image 
                    source={{uri: focused ? 'connect_selected' : 'connect_normal'}}  
                    style={{width:20,height:14}}  
                    />  
            ),
        }    
    },
    NewsNavigator:{ 
        screen: NewsNavigator,
        navigationOptions:{
            tabBarLabel:'咨讯',
            tabBarIcon:({focused}) => (  
                <Image 
                    source={{uri: focused ? 'news_selected' : 'news_normal'}}  
                    style={{width:18,height:18}}  
                    />  
            ),
        
        }
    },
    MetroNavigator:{ 
        screen: MetroNavigator,
        navigationOptions:{
            tabBarLabel:'地铁',
            tabBarIcon:({focused}) => (  
                <Image 
                    source={{uri: focused ? 'travel_selected' : 'travel_normal'}}  
                    style={{width:18,height:18}}  
                    />  
            ),
        }
    },
    TravelNavigator:{ 
        screen: TravelNavigator,
        navigationOptions:{
            tabBarLabel:'出行',
            tabBarIcon:({focused}) => (  
                <Image 
                    source={{uri: focused ? 'trip_selected' : 'trip_normal'}}  
                    style={{width:18,height:18}}  
                    />  
            ),
        }
    },
    PlayNavigator:{ 
        screen: PlayNavigator,
        navigationOptions:{
            tabBarLabel:'玩吧',
            tabBarIcon:({focused}) => (  
                <Image 
                    source={{uri: focused ? 'game_selected' : 'game_normal'}}  
                    style={{width:18,height:14}}  
                    />  
            ),
        }
    }

    },
    {
        tabBarPosition:'bottom',
        swipeEnabled:false,  
        lazy: true,
        tabBarOptions: {
            showIcon:true,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle:{marginBottom:6},
          },
        //在这里解决了：在点击进入详情页面时，Detail页面会保留底部的TabBar。
        //用了tabBarVisible为true显示，false消失
        navigationOptions: ({navigation}) => {
            console.log();
            return {
                tabBarVisible : navigation.state.routes.length == 1 ? true : false,
            }
        }
    }
)

const styles = StyleSheet.create({
    imgIcon:{
        width:30,
        height:30
    }
})

export default Tab;


//1. tabNavigation中的：tabBarOptions的属性如下：
// export interface TabViewConfig {
//     tabBarComponent?: React.ReactType;
//     tabBarPosition?: 'top' | 'bottom';
//     tabBarOptions?: {
//       activeTintColor?: string,
//       allowFontScaling?: boolean,
//       activeBackgroundColor?: string,
//       inactiveTintColor?: string,
//       inactiveBackgroundColor?: string,
//       showLabel?: boolean,
//       style?: StyleProp<ViewStyle>,
//       labelStyle?: StyleProp<TextStyle>,
//       iconStyle?: StyleProp<ViewStyle>,
//       // Top
//       showIcon?: boolean,
//       upperCaseLabel?: boolean,
//       pressColor?: string,
//       pressOpacity?: number,
//       scrollEnabled?: boolean,
//       tabStyle?: StyleProp<ViewStyle>,
//       indicatorStyle?: StyleProp<ViewStyle>,
//     };
//     swipeEnabled?: boolean;
//     animationEnabled?: boolean;
//     lazy?: boolean;
//   }

//2. tabNavigation中的navigationOptions的属性如下：
// export interface NavigationTabScreenOptions {
//     title?: string;
//     tabBarIcon?:
//       React.ReactElement<any>
//       | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
//         any
//       > | null));
//     tabBarLabel?:
//       string
//       | React.ReactElement<any>
//       | ((options: { tintColor: (string | null), focused: boolean }) => (React.ReactElement<
//         any
//       > | string | null));
//     tabBarVisible?: boolean;
//     tabBarTestIDProps?: { testID?: string, accessibilityLabel?: string };
//     tabBarOnPress?: (options: {
//       scene: TabScene,
//       jumpToIndex: (index: number) => void
//     }) => void;
//   }