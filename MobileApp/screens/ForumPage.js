/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, Platform, StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import { throwStatement } from '@babel/types';
import firebase from 'firebase'



export default class ForumPage extends React.Component{
  
  constructor (props){
    super(props);
    this.state = {
      textmessage: '',
      //messages: [],
    }
  }

  
  
  
  handleChange = key => val => {
    this.setState({ [key]: val})
  }


  sendMessage = async() => {
    
    
    
      
    if(this.state.textmessage.length > 0){
      let msgId = firebase.database().ref('chat').child('users/' + firebase.auth().currentUser.uid).push().key
      let updates = {};
      let message = {
        message: this.state.textmessage,
        //from: '/users/' + firebase.auth().currentUser.uid.Email
      }

      

      updates[firebase.auth().currentUser.uid + '/' + msgId] = message;
      firebase.database().ref('chat').update(updates);
      this.setState({textmessage: ''});


      }
    }



  render() {
    return (
      
      <SafeAreaView>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
            style={styles.TextInput}
            value={this.state.textmessage}
            placeholder="Type message..."
            onChangeText={this.handleChange('textmessage')}
            />
            <TouchableOpacity onPress={this.sendMessage}>
              <Text style={styles.bntText}>Send</Text>
            </TouchableOpacity>
            </View>
      </SafeAreaView>
    );

  

    
    
  }
}




  


const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75,
    //marginBottom: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    backgroundColor: 'white',
    },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
    position: 'absolute',
  bottom:0
    
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    
  },
});