import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './container/login';
import Signup from './container/signup';

const Router = createStackNavigator(
  {
    Login: {screen: Login},
    Signup: {screen: Signup},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default createAppContainer(Router);
