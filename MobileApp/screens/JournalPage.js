/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Alert, Modal, TouchableOpacity} from 'react-native';
import {CalendarList} from 'react-native-calendars';


type Props = {};
export default class JournalPage extends React.Component{
  render() {
    return (
      <View style={styles.container}>
            <CalendarList
            pagingEnabled={true}
            hideArrows={true}
            horizontal={true}
            // Set custom calendarWidth.
            calendarWidth={375}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 marginTop: 50,
                                 //marginBottom: 50,
                                 flexDirection: 'row',
                                 flexWrap: 'wrap',
                                 justifyContent: 'space-evenly',
                                 //alignItems: 'center',
                                 //backgroundColor: '#F5FCFF',
                                 backgroundColor: 'white',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 fontWeight: 'bold',
                                 textAlign: 'center',
                                 marginBottom: 5,
                                 //marginTop: 325,
                                 },
                                 instructions: {
                                 textAlign: 'center',
                                 color: '#333333',
                                 marginBottom: 5,
                                 },
                                 image: {
                                 width: 150,
                                 height: 150,
                                 borderRadius: 150/2,
                                 marginBottom: 15,
                                 },
                                 tinyImage: {
                                 width: 50,
                                 height: 50,
                                 borderRadius: 50/2,
                                 },
                                 about: {
                                 margin: 15,
                                 fontStyle: 'italic',
                                 textAlign: 'center',
                                 color: '#333333',
                                 },
                                 });


