import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import firebase from 'firebase';

export default class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: 'adam.fci91@gmail.com',
      password: '1234567'
    }
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) => {
      this.props.navigation.navigate('Map')
    }
    ).catch((error) => {
      this.setState({
        loading: false
      });
      alert(error);
    });
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: 'ahmedsaid',
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../logo.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
        <View style={styles.bottons}>
          <TouchableOpacity
            style={[styles.touch, styles.signUp]}
            onPress={() => { this.props.navigation.replace('SignUp') }}
          >
            <Text style={styles.text}>Creact acount</Text>
          </TouchableOpacity>
          <View style={styles.or}>
            <View style={styles.line}></View>
            <Text>Or</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity
            style={[styles.touch, styles.signIn]}
            onPress={() => {
              this.props.navigation.replace('SignIn')
            }}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  logo: {
    height: '40%',
    width: '80%',
    marginBottom: 70,
    marginTop: 40,
  },
  bottons: {
    width: '80%',
    height: '30%',
    justifyContent: 'space-between'
  },
  touch: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signUp: {
    backgroundColor: '#B1AFAF'
  },
  signIn: {
    backgroundColor: '#007EE5'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  orText: {
    color: '#B1AFAF'
  },
  or: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: '46%',
    height: 1,
    backgroundColor: '#B1AFAF',
  }
});
