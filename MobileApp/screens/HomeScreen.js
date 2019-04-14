/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import * as firebase from 'firebase'; 
import {Input} from './components/loginAndSignUp';
import {LButton} from './components/LoginButtons';
import {createStackNavigator, createAppContainer} from 'react-navigation';




class HomeScreen extends React.Component{
  state = {
    email: '',
    password: '',
  }
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyB6qxRsyPJZccbTXBIpyQT1I6-sRrAWqj0',
      authDomain: 'neveragaintech-c8590.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
    
  }

  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('ForumPage')
      }, (error) => {
          Alert.alert(error.message);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Input 
          placeholder = 'enter your email...'
          label = 'Email'
          onChangeText = {email => this.setState({email})}
          value = {this.state.email}
        />  
        <Input 
          placeholder = 'enter your password...'
          label = 'Password'
          secureTextEntry
          onChangeText = {password => this.setState({password})}
          value = {this.state.password}
        />  
        <LButton onPress={this.onLoginPress}>Log In</LButton> 
        <Button title="SignUp" onPress={() => this.props.navigation.navigate('SignUp')}/>
        
         
        
            
      </View>
    );

  }


}

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  onSignUp = () => {
    if(this.state.password != this.state.confirmPassword){
      Alert.alert("Passwords do not match");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('ForumPage')
      }, (error) =>{
        Alert.alert(error.message);
      });
  }

  render() {
    
    

    return (
      <View style={styles.container}>
        <Input 
          placeholder = 'enter your email...'
          label = 'Email'
          onChangeText = {email => this.setState({email})}
          value = {this.state.email}
        />
        <Input 
          placeholder = 'enter your password...'
          label = 'Password'
          secureTextEntry
          onChangeText = {password => this.setState({password})}
          value = {this.state.password}
        /> 
        <Input
          placeholder = 'confirm password...'
          label = 'Confirm  Password'
          secureTextEntry
          onChangeText = {confirmPassword => this.setState({confirmPassword})}
          value = {this.state.confirmPassword}
        />   
        <LButton onPress={this.onSignUp}>Sign In</LButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  
});

const navi = createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUp
})

const container = createAppContainer(navi);
export default container; 



