/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';


type Props = {};
export default class HomeScreen extends React.Component{
  render() {
    return (
      <View>
        <Text>Welcome to NeverAgainTech</Text>
        <Button
                 title="Get Started"
                 onPress={() =>
                   this.props.navigation.navigate('ForumPage')
                 }
               />
      </View>
    );
  }
}
