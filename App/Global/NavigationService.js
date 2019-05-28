
import { NavigationActions } from 'react-navigation';

export class NavigationService {
    static Navigator=null
    static setNavigator=(topNavigator) => {
      NavigationService.Navigator = topNavigator;
    }
    static navigate(routeName, params) {
      NavigationService.Navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        })
      );
    }


    static goBack(params) {
      NavigationService.Navigator.dispatch(
        NavigationActions.back({
          params
        })
      );
    }

}
