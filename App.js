/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './App/AppNavigator';
import { NavigationService } from './App/Global/NavigationService';

import * as firebase from 'firebase';  
  var fireBaseconfig = {
    apiKey: "AIzaSyCC_eWUZj87pB0wDA9jkIVZGs3LvPm3G4M",
    authDomain: "asaidtashfier.firebaseapp.com",
    databaseURL: "https://asaidtashfier.firebaseio.com",
    projectId: "asaidtashfier",
    storageBucket: "asaidtashfier.appspot.com",
    messagingSenderId: "459654438006",
    appId: "1:459654438006:web:6a01f2c1a2418e59"
  };
const firebaseApp = firebase.initializeApp(fireBaseconfig);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    console.log('TAG', 'App')
    return (
        <AppNavigator
            ref={navigatorRef => {
              NavigationService.setNavigator(navigatorRef);
            }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
