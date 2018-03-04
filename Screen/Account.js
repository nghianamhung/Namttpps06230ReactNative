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
  KeyboardAvoidingView
} from 'react-native';


export default class Account extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Account',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../image/icon-user.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      user:'Namttpps06230@gmail.com',
    }

    
  }
  
   

  render() {
    return (
      <View style={styles.background}>
         <View>
         <KeyboardAvoidingView behavior="padding" style={{width: '100%'  
       ,height:'100%', justifyContent: 'center',}}>
        <View style={styles.container}>
       
          <View style={styles.image}>
            <Image
              source={require('../image/icon-profile.png')}
              style={{ alignItems: 'center',marginTop:30, }}
            />
             <Text style={{fontSize:20, color:'white',marginTop:20,fontWeight:'bold'}}>
              {this.state.user}
            </Text>

            <Text style={{fontSize:14, color:'white',marginTop:5,}}>
            Customer 
            </Text>
          
          </View>
          </View>
          </KeyboardAvoidingView>
      </View >
      </View >

    );
  }
}

const styles = StyleSheet.create({
  background: {
   
    backgroundColor: '#222222',
  },
  container: {
    marginTop: -130,
  },

  image: {
    marginTop: -220,
    alignItems: 'center',
    backgroundColor: '#7ac142',
  },
  icon: {
    width: 15,
    height: 15,
  },
});
