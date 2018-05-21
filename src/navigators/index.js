import {createStackNavigator} from 'react-navigation';
import AddCount from '../page/component/AddCount';
import SignUp from '../page/component/signUp';

const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: AddCount,    
      },
      SignUp: {
        screen: SignUp, 
      },
    },
    {
      initialRouteName: 'Home',
    }
);

export default AppNavigator;