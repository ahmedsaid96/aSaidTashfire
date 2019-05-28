import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import firebase from 'firebase';

export default class SignIn extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    login() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then((userData) => {
          this.props.navigation.replace('Map')
        }
        ).catch((error) => {
          
          alert(error);
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
                <View style={styles.form}>
                    
                    <TextInput
                        selectionColor='white'
                        placeholderTextColor={'#AAC6DB'}
                        underlineColorAndroid={'#AAC6DB'}
                        style={styles.textInput}
                        placeholder={'Email'}
                        onChangeText={(text) => {this.setState({email: text}) }}
                        textContentType={'emailAddress'}
                    />

                    <TextInput
                        selectionColor='white'
                        placeholderTextColor={'#AAC6DB'}
                        underlineColorAndroid={'#AAC6DB'}
                        style={styles.textInput}
                        placeholder={'Password'}
                        onChangeText={(text) => {this.setState({password: text}) }}
                        textContentType={'password'}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={[styles.touch, styles.signIn]}
                        onPress={() => {
                            this.login()
                            
                        }}
                    >
                        <Text style={styles.singUp}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginBottom: '5%'}}
                        onPress={() => {
                            this.props.navigation.replace('SignUp')
                        }}
                    >
                        <Text style={styles.text}>Not registered yet?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    logo: {
        height: '35%',
        width: '80%',
        marginBottom: 70,
        marginTop: 40,
    },
    form: {
        width: '100%',
        height: '50%',
        backgroundColor: '#007EE5',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '8%',
    },
    touch: {
        width: '80%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    signIn: {
        backgroundColor: '#fff'
    },
    text: {
        color: '#AAC6DB',
        fontSize: 16
    },
    singUp: {
        color: '#495158',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInput: {
        width: '80%',
        color: '#fff'
    }

});
