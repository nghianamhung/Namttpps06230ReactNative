/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Alert
} from 'react-native';
import { firebaseApp } from '../Config/firebase';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
    headerLeft:null,
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    
    }
  }
  

  alertItemName = (item) => {
    alert(item)
  }
  CheckLogin = () => {
    const { email } = this.state;
    const { password } = this.state;
   
    if (email == '' || password == '') {

      alert(
            'Nhập Email và Password');
    } else {

      if (email == '' || password == '') {

        alert('Nhập Email và Password');
      } else {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert(
              'Thông báo',
              'Đăng nhập Email: ' + email,
              [
              
                
                {text: 'OK', onPress: () => this.props.navigation.navigate('TabManager',{user:email})},
              ],
              { cancelable: false }
            )




            
          })
          .catch(function (error) {
            alert('Đăng nhập thất bại,\n' + error);
          });
      }
    }
  }
  ClickRegister = () => {

  
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>

          <View style={styles.image}>
            <Image
              source={require('../image/Razerlogo1.png')}
              style={{ alignItems: 'center' }}
            />

          </View>
          <View style={{ marginTop: 50, }}>
            <TextInput style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#ffffff"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })} 
              />
            <TextInput style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#ffffff"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })} 
              />
            <TouchableOpacity style={styles.submitButton}
              // onPress={() =>  this.login(this.state.email, this.state.password)
              onPress={this.CheckLogin}>
              <Text style={styles.submitButtonText}> Đăng nhập  </Text>
            </TouchableOpacity>
            
          </View>
          <Text style={styles.textOr}> ──────────────────────  OR  ──────────────────────</Text>

          <View style={{ alignItems: 'center', }}>
            <Text style={styles.textLoginFB}>
              Log In With Facebook.
            </Text>
            <Image
              source={require('../image/icon.png')}
              style={{ position: "relative", left: -70, bottom: 19, width: 20, height: 20 }} />
          </View>

        </View >
        <View style={styles.footer}>

          <TouchableOpacity
            // onPress={() =>  this.login(this.state.email, this.state.password)
            onPress={this.ClickRegister}>
            <Text style={styles.textSignUp}>
              Đăng ký
            </Text>
          </TouchableOpacity>

        </View>
      </View >


    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222222',
  },
  container: {
    marginTop: 100,

  },
  footer: {
    marginTop: 20,
    height: 80,
    backgroundColor: '#7ac142',
    borderColor: '#000000',
    borderTopWidth: 0.3,
  },
  input: {
    margin: 15,
    height: 40,
    backgroundColor: '#000000',
    color: 'green',

  },
  submitButton: {
    backgroundColor: '#7ac142',
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: '#ffffff30',
    borderWidth: 1,
    alignItems: 'center',
  },

  submitButtonText: {
    color: 'white',
    fontSize: 16,

  },

  
  textOr: {
    color: 'white',
    fontSize: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  textLoginFB: {
    marginTop: 20,
    color: 'white',
    fontSize: 13,
    marginLeft: 30,
    fontWeight: 'bold',

  },
  textSignUp: {
    marginTop: 20,
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    fontStyle: 'normal',
    flexDirection: 'column',


  },
  image: {
    marginTop: -30,
    alignItems: 'center',
  },
});
