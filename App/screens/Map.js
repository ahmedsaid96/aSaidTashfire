import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';

export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: props.markers
    }
  }

  render() {
    console.log('TAG', 'login')
    return (

      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          region={{
            latitude: 45.51583133575693,
            latitudeDelta: 0.04591535278167669,
            longitude: -122.66838999465108,
            longitudeDelta: 0.031906552612781525
          }}
          onRegionChange={(region) => { console.log(region) }}
        >

          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            >
              <View style={styles.imageView}>
                <Image
                  source={{ uri: marker.image }}
                  resizeMode={'contain'}
                  style={styles.image}
                />
              </View>
            </Marker>
          ))}

        </MapView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    height: Height,
    width: Width,
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%'
  },
  imageView: {
    height: 70,
    width: 70,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 200,
  }
});

function mapDispatchToProps(dispatch) {
  return {
    setMarkers: (markers) => { dispatch(Action.setMarkers(markers)); },

  };
}

function mapStateToProps(state) {
  console.log('TAG', 'state', state)
  return {
    markers: state.markers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);