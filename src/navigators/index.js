import {StackNavigator, createStackNavigator} from 'react-navigation';
import AddCount from '../page/component/AddCount';
import SignUp from '../page/component/SignUp';
import Tab from '../tabs/index'

const AppNavigator = createStackNavigator(
    {
      Tab:{
        screen: Tab, 
      },
      Home: {
        screen: AddCount,    
      },
      SignUp: {
        screen: SignUp, 
      },
    },
    {
      initialRouteName: 'Tab',
      navigationOptions : {
        headerStyle: { display: 'none' }
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