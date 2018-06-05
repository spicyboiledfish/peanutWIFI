import {StackNavigator, createStackNavigator} from 'react-navigation';

import Welfare from '../page/welfare/Welfare';
import News from '../page/news/News';
import Metro from '../page/Metro';
import Travel from '../page/Travel';
import Play from '../page/Play';
import Tab from './Tab';
import SignUp from '../page/welfare/SignUp'
import Detail from '../page/Detail';
import {Color} from 'LocalReference';
import NavItem from './NavItem';
import Speed from '../page/welfare/Speed'

const navigationOptions = ({navigation})=>({
    headerStyle:{ backgroundColor: Color.HSHeaderBgColor},
    headerTitleStyle: { color: Color.HSWhiteColor, alignSelf: 'center',},
    headerLeft: <NavItem onPress={()=>navigation.goBack()}/>,
})

const WelfareNavigator = createStackNavigator(
    {
      Welfare:{
        screen: Welfare
      }, 
      Detail:{
        screen:Detail
      },
      SignUp,Speed,
    },
    navigationOptions
);

const NewsNavigator = createStackNavigator(
  {
    News:{
      screen: News,
    }, 
  },
  navigationOptions
  
);
const MetroNavigator = createStackNavigator(
  {
    Metro:{
      screen: Metro,
    }, 
  },
  navigationOptions
  
);
const TravelNavigator = createStackNavigator(
  {
    Travel:{
      screen: Travel,
    }, 
  },
    navigationOptions
  
);

const PlayNavigator = createStackNavigator(
  {
    Play:{
      screen: Play,
    }, 
  },
    navigationOptions
  
);


export  {WelfareNavigator, NewsNavigator, MetroNavigator, TravelNavigator, PlayNavigator}


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