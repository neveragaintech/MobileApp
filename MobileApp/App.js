import React from 'react';
import AppNavigator from './AppNavigator';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as firebase from 'firebase'; 

export default class App extends React.Component {
  

  render() {
    return (
        <AppNavigator/>
    );
  }
}

const styles = {
  item: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
};
