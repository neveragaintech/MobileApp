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
import console from 'firebase'; 







class HomeScreen extends React.Component{
  state = {
    email: '',
    password: '',
    username: '',
    bio: '',
    imageUri: '',
  }
  
  componentWillMount(){
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyB6qxRsyPJZccbTXBIpyQT1I6-sRrAWqj0',
    //   authDomain: 'neveragaintech-c8590.firebaseapp.com',
    // }

    var config = {
      apiKey: 'AIzaSyB6qxRsyPJZccbTXBIpyQT1I6-sRrAWqj0',
      authDomain: 'neveragaintech-c8590.firebaseapp.com',
      databaseURL: "https://neveragaintech-c8590.firebaseio.com/",
      projectId: "neveragaintech-c8590",
  };

  

  if (!firebase.apps.length) {firebase.initializeApp(config);}
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    
    firebase.database().ref('users').on('value', (data) => {
      //console.log(data.toJASON());
    })
    

}


  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
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
        <Button title="Don't have an account? Sign Up" onPress={() => this.props.navigation.navigate('SignUp')}/>
        <Button title="Forgot Password?" onPress={() => this.props.navigation.navigate('forgotPassword')}/>
        
         
        
            
      </View>
    );

  }


}

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    username: 'NAT-user',
    bio: 'Hello there! Welcome to my profile!',
    imageUri: require('../assets/logo.jpg'),
  }

  readDataFromDatabase = () => {
    firebaseApp.database().ref('/users/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
      const userObj = snapshot.val();
      this.username = userObj.Username;
      this.bio = userObj.Bio;
      this.imageUri = userObj.Image;
      
    });
    
  }

  onSignUp = () => {
    if(this.state.password != this.state.confirmPassword){
      Alert.alert("Passwords do not match");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        firebase.database().ref('users/' + res.user.uid).set(
          {
            Email: this.state.email,
            Username: this.state.username,
            Bio: this.state.bio,
            
            ImageUri: this.state.imageUri,
    
          }
        )
        this.props.navigation.navigate('ForumPage')
      })
        // }) ((error) => {
        //   Alert.alert(error.message);
        // });
  }

  handleEmail = (text) => {
    this.setState({email: text })
 }

 handlePassword = (text) => {
  this.setState({ password: text })
}

  render() {
    
    

    return (
      <View style={styles.container}>
        <Input 
          placeholder = 'enter your email'
          label = 'Email'
          onChangeText =  {this.handleEmail} //{email => this.setState({email})}
          value = {this.state.email}
        />
        <Input 
          placeholder = 'enter your password'
          label = 'Password'
          secureTextEntry
          onChangeText =  {this.handlePassword} //{password => this.setState({password})}
          value = {this.state.password}
        /> 
        <Input
          placeholder = 'confirm password'
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

class forgotPassword extends React.Component {
  state = {
    email: '',
  }
  
  onResetPassword = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(() => {
      Alert.alert("Password email has been sent");
    }, (error) => {
      Alert.alert(error.message);
    });
  }


  render() {

    return (
      <View style={styles.container}>
        <Input 
          placeholder = 'enter your email'
          label = 'Email'
          onChangeText = {email => this.setState({email})}
          value = {this.state.email}
        />
        <LButton onPress={this.onResetPassword}>Reset Password</LButton>
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
  SignUp: SignUp,
  forgotPassword: forgotPassword
})

export const images = {
    'logo'  : require('../assets/logo.jpg'),
}

const container = createAppContainer(navi);
export default container; 



