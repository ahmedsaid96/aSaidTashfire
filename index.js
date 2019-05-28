/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyStore from './App/Redux/ConfigStore';
import { Provider } from 'react-redux';

const MainApp = () => {
    console.log('TAG', 'Index')
    return (
      <Provider store={MyStore.store}>
          <App />
  
      </Provider>
    );
  };


AppRegistry.registerComponent(appName, () => MainApp);
