import {StackNavigator, createStackNavigator} from 'react-navigation';

import Welfare from '../page/welfare/index';
import News from '../page/news/index';
import Metro from '../page/metro/index';
import Travel from '../page/travel/index';
import Play from '../page/play/index';
import Tab from '../tabs/index';

const AppNavigator = createStackNavigator(
    {
      Welfare:{
        screen: Welfare, 
        navigationOptions: {
          title:'福利'
        }
      },
      News:{
        screen: News, 
        navigationOptions: {
          headerTitle:'资讯'
        }
      },
      Metro:{
        screen: Welfare, 
        navigationOptions: {
          headerTitle:'地铁'
        }
      },
      Travel:{
        screen: Welfare, 
        navigationOptions: {
          headerTitle:'出行'
        }
      },
      Play:{
        screen: Play, 
        navigationOptions: {
          headerTitle:'玩吧'
        }
      },
      Tab:{
        screen: Tab
      }
    },
    {
      initialRouteName: 'Tab',
      navigationOptions:{
        headerStyle:{ backgroundColor:'#fb4747'},
        headerTitleStyle: { color: '#fff'},
      }
    }
);

export default AppNavigator;


//**备注：StackNavigation的navigationOptions属性如下：
// export interface NavigationStackScreenOptions {
//   title?: string;
//   header?: (React.ReactElement<any> | ((headerProps: HeaderProps) => React.ReactElement<any>)) | null;
//   headerTransparent?: boolean;
//   headerTitle?: string | React.ReactElement<any>;
//   headerTitleStyle?: StyleProp<TextStyle>;
//   headerTintColor?: string;
//   headerLeft?: React.ReactElement<any>;
//   headerBackTitle?: string | null;
//   headerTruncatedBackTitle?: string;
//   headerBackTitleStyle?: StyleProp<TextStyle>;
//   headerPressColorAndroid?: string;
//   headerRight?: React.ReactElement<any>;
//   headerStyle?: StyleProp<ViewStyle>;
//   headerBackground?: React.ReactNode | React.ReactType;
//   gesturesEnabled?: boolean;
//   gestureResponseDistance?: { vertical?: number; horizontal?: number };
// }