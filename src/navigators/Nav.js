import {StackNavigator, createStackNavigator} from 'react-navigation';

import Welfare from '../page/Welfare';
import News from '../page/News';
import Metro from '../page/Metro';
import Travel from '../page/Travel';
import Play from '../page/Play';
import Tab from './Tab';

const AppNavigator = createStackNavigator(
    {
      Home:{
        screen: Tab,
        navigationOptions:{
          title:"福利"
        }
      }, 
    },
    {
      initialRouteName: 'Home',
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