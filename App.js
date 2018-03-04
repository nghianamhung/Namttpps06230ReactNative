/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { StackNavigator, TabBarBottom } from 'react-navigation';
import Login from './Screen/Login';
import TabManager from './Screen/TabManager';
import FormAdd from './Screen/FormAdd';
import FormUpdate from './Screen/FormUpdate';
import Register from './Screen/Register';
export default class App extends React.Component {
  

  render() {
    return (
      <AppNavigator />

    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  TabManager: { screen: TabManager },
  Register: { screen: Register },
  FormAdd: { screen: FormAdd },
  FormUpdate: { screen: FormUpdate },


});
