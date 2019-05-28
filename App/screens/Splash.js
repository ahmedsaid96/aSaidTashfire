import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';

import firebase from 'firebase';
import { Action } from '../Redux/Actoin';

const Markers = [
  {
    coordinate: {
      latitude: 45.510038,
      longitude: -122.661951,
    },
    title: "ZARA",
    description: "Spanish fashion chain offering on-trend house-brand clothing, shoes & accessories.",
    image: "https://i.imgur.com/IPIIho9.jpg",
    open: false,
    rating: 5,
    cost: "$"
  },
  {
    coordinate: {
      latitude: 45.524548,
      longitude: -122.6749817,
    },
    title: "Pringles",
    description: "This is the best place in Portland",
    image: "https://i.imgur.com/w2M2qDW.jpg",
    open: true,
    rating: 4,
    cost: "$$$"
  },
  {
    coordinate: {
      latitude: 45.524698,
      longitude: -122.6655507,
    },
    title: "Pizza Hut",
    description: "This is the second best place in Portland",
    image: "https://i.imgur.com/YghgM8O.jpg",
    open: false,
    rating: 5,
    cost: "$$$"
  },
  {
    coordinate: {
      latitude: 45.516912,
      longitude: -122.675128,
    },
    title: "Zagat",
    description: "Zagat cuts through the clutter of available dining choices and guides you towards the best places",
    image: "https://i.imgur.com/CZtayub.jpg",
    open: true,
    rating: 3,
    cost: "$$"
  },
  {
    coordinate: {
      latitude: 45.521016,
      longitude: -122.6561917,
    },
    title: "Ci gusta",
    description: "This is the fourth best place in Portland",
    image: "https://i.imgur.com/RIVYhrP.jpg",
    open: false,
    rating: 5,
    cost: "$"
  },
  {
    coordinate: {
      latitude: 45.505421,
      longitude: -122.681058,
    },
    title: "H&A",
    description: "Chain retailer supplying on-trend clothing, swimwear, accessories & shoes.",
    image: "https://i.imgur.com/tFPc7ai.jpg",
    open: false,
    rating: 5,
    cost: "$"
  },
];

class Splash extends Component {


  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
    this.props.setMarkers(Markers)
      setTimeout(() => {
        this.props.navigation.replace('Login');
      }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../logo.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  logo: {
    height: '20%',
    width: '80%',
    marginBottom: 70,
    marginTop: 40,
  },
  
});

function mapDispatchToProps(dispatch) {
    return {
      setMarkers: (markers) => { dispatch(Action.setMarkers(markers)); },
     
    };
  }
  
  function mapStateToProps(state) {
    console.log('TAG', 'state', state)
    return {
     
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Splash);