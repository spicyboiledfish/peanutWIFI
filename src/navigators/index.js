import {StackNavigator, createStackNavigator} from 'react-navigation';
import Tab from '../tabs/index'

const AppNavigator = createStackNavigator(
    {
      Tab:{
        screen: Tab, 
        navigationOptions: {
          title: '首页',
      }
      },
    },
    {
      initialRouteName: 'Tab',
      navigationOptions:{
        headerStyle:{ backgroundColor:'#fb4747'},
        headerTintColor:'#ffffff',
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