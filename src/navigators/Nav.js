import {StackNavigator, createStackNavigator} from 'react-navigation';

import Welfare from '../page/Welfare';
import News from '../page/News';
import Metro from '../page/Metro';
import Travel from '../page/Travel';
import Play from '../page/Play';
import Tab from './Tab';
import Detail from '../page/Detail';

const commonOptions = (route) =>({
    headerMode:'screen',
    initialRouteName: route,
    navigationOptions: {
      headerStyle:{ backgroundColor: '#fb4747'},
      headerTitleStyle: { color:'#fff', alignSelf: 'center',},
    },
})

const WelfareNavigator = createStackNavigator(
    {
      Welfare:{
        screen: Welfare
      }, 
      Detail:{
        screen:Detail
      }
    },
    commonOptions("Welfare")
);

const NewsNavigator = createStackNavigator(
  {
    News:{
      screen: News,
    }, 
  },
  commonOptions("News")
  
);
const MetroNavigator = createStackNavigator(
  {
    Metro:{
      screen: Metro,
    }, 
  },
  commonOptions("Metro")
  
);
const TravelNavigator = createStackNavigator(
  {
    Travel:{
      screen: Travel,
    }, 
  },
  commonOptions("Travel")
  
);

const PlayNavigator = createStackNavigator(
  {
    Play:{
      screen: Play,
    }, 
  },
  commonOptions("Play")
  
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