
import { createStackNavigator, createAppContainer,Text } from 'react-navigation';
import Login from './screens/Login.js';
import Map from './screens/Map.js';
import SignUp from './screens/SignUp.js';
import SignIn from './screens/SignIn.js';
import Splash from './screens/Splash.js';
console.log('TAG', 'nav')
const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
}, {
  // headerMode: 'none',
  initialRouteName: 'Splash',
});


export default createAppContainer(AppNavigator);
