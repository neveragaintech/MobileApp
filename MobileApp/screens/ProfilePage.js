import React from 'react';
// npm install react-native-divider --save
import Divider from 'react-native-divider';
import PhotoUpload from 'react-native-photo-upload'
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
import * as firebase from 'firebase';
import {Input} from './components/loginAndSignUp';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, Switch, TextInput, Alert} from 'react-native';
import { breakStatement } from '@babel/types';



export default class ProfilePage extends React.Component{




  state = {
    switchValue: false,
    notificationCol: false,
    acctsettingsCol: false,
    passwordCol: false,
    deactivateCol: false,
    username: '',
    imageUri: 'https://images.unsplash.com/photo-1553531580-54bcdf7bc851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    tempUsername: '',
    bio: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };



  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };


  openNotifs = () => {

    currVal = this.state.notificationCol;
    this.setState({ notificationCol: !currVal });

  };


  openAcctSettings = () => {

    currVal = this.state.acctsettingsCol;
    this.setState({ acctsettingsCol: !currVal });

  };


  openPassword = () => {

    currVal = this.state.passwordCol;
    this.setState({ passwordCol: !currVal });

  };


  openDeactivate = () => {

    currVal = this.state.deactivateCol;
    this.setState({ deactivateCol: !currVal });

  };

  onLogOutPress = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('HomeScreen')

  }

  onDeleteAccount = () => {
    firebase.auth().currentUser.delete()
    firebase.database().ref('users/' +  firebase.auth().currentUser.uid).remove();
    Alert.alert("Your account has been deleted.")
    this.props.navigation.navigate('HomeScreen')

  }





  onChangeUsername  = () => {
    //Username = this.state.tempUsername
    //this.state.username= this.state.tempUsername

    firebase.database().ref('users/' +  firebase.auth().currentUser.uid).update(
  {
    Username: this.state.tempUsername
    //this.state.tempUsername= this.state.username
  }
  )}

  
checkNewPasswords  = () => {
    firebase.database().ref('/users/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
    const userObj = snapshot.val();
      if(this.state.newPassword != this.state.confirmPassword){
        Alert.alert("The new passwords do not match")
      } else {
        let user = firebase.auth().currentUser;
        user.updatePassword(this.state.newPassword).then(() => {
                                                                                                                                                                Alert.alert("Password has been changed")
                                                                                                                                                                                  }, (error) => {
                                                                                                                                                                                  Alert.alert("Please try again")
                                                                                                                                                                                  });
          this.state.confirmPassword = ''
          this.state.newPassword = ''

      }
      }
      )


        }

    onChangeImage  = () => {
      firebase.database().ref('users/' +  firebase.auth().currentUser.uid).update(
    {
      Image: this.state.imageUri
      //this.state.tempUsername= this.state.username
    }
      )}

    onChangeBio = () => {
      firebase.database().ref('users/' +  firebase.auth().currentUser.uid).update(
        {
          Bio: this.state.bio
          //this.state.tempUsername= this.state.username
        }


          )

    }


    render() {
   


      //this.state.username = this.state.tempUsername
        return (
                <ScrollView>

                <PhotoUpload
                onPhotoSelect={avatar => {
                // imageUri = ImagePicker.avatar.uri
                // {this.onChangeimage}
                if (avatar) {
                console.log('Image base64 string: ', avatar)

                }

                }}
                >
                <Image
                style={{
                marginTop: 75,
                width: 150,
                height: 150,
                borderRadius: 150/2,
                }}
                resizeMode='cover'
                source={{
                uri: 'https://images.unsplash.com/photo-1553531580-54bcdf7bc851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
                }}
                />
                </PhotoUpload>

                {/* <Text style={{fontSize: 20}}>{this.props.username}</Text> */}
                <Text style={styles.welcome}>{this.state.switchValue.username}</Text>

                <Text style={styles.about}>{this.state.bio}</Text>
                <Divider>Settings</Divider>

                <View style={{flex: 1, alignItems: 'center'}}>





 <TouchableOpacity
 style={styles.button}
 onPress={this.openNotifs}

 >
 <Text>Notifications</Text>
 </TouchableOpacity>

 <Collapsible collapsed={!this.state.notificationCol}>

 <Text>{this.state.switchValue ? 'Notifications are ON' : 'Notifications are OFF'}</Text>
    <View style={{alignItems: 'center'}}>
                <Switch
         style={{ marginTop: 30 }}
         onValueChange={this.toggleSwitch}
         value={this.state.switchValue}
       />
       </View>
       </Collapsible>


                <TouchableOpacity
                style={styles.button}
                onPress={this.openAcctSettings}

                >
                <Text>Account Settings</Text>
                </TouchableOpacity>

                <Collapsible collapsed={!this.state.acctsettingsCol}>

                <Text>Enter New Username</Text>
                <TextInput style={{borderWidth: 0.5, width: 200}}
                  placeholder = 'enter username...'
                  label = 'Username'
                  onChangeText = {tempUsername => this.setState({tempUsername})}
                  value = {this.state.tempUsername}

                />

                {/* <Button title="Save Username" onPress={() => this.onChangeUsername}/> */}

                <TouchableOpacity
                style={styles.deactivateButton}
                onPress={this.onChangeUsername}

                >
                {/* <TextInput style={{borderWidth: 0.5, height: 70}} multiline={true}
                ref= {(el) => { this.tempUsername = el; }}
                onChangeText={(tempUsername) => this.setState({tempUsername})}
                value={this.state.tempUsername}

                /> */}




               <Text>Save Username</Text>


                 </TouchableOpacity>

                <Text>Enter New Bio: </Text>


                <TextInput style={{borderWidth: 0.5, height: 70, width: 200}} multiline={true}
                ref= {(el) => { this.bio = el; }}
                onChangeText={(bio) => this.setState({bio})}
                value={this.state.bio}
                />

                <TouchableOpacity
                style={styles.deactivateButton}
                onPress={this.onChangeBio}

                >
                <Text>Save Bio</Text>
                </TouchableOpacity>
                </Collapsible>

                <TouchableOpacity
                style={styles.button}
                onPress={this.openPassword}

                >
                <Text>Change Password</Text>
                </TouchableOpacity>

                <Collapsible collapsed={!this.state.passwordCol}>
                {/* <Text>Old Password: </Text>

                <TextInput
                secureTextEntry={true} style={{borderWidth: 0.5, width: 200}}
                ref= {(el) => { oldPassword = el; }}
                onChangeText={(oldPassword) => this.setState({oldPassword})}
                value={this.state.oldPassword}


                /> */}

                <Text>New Password: </Text>

                <TextInput
                secureTextEntry={true} style={{borderWidth: 0.5, width: 200}}
                ref= {(el) => { newPassword = el; }}
                onChangeText={(newPassword) => this.setState({newPassword})}
                value={this.state.newPassword}
                />

                <Text>New Password Again: </Text>
                <TextInput
                secureTextEntry={true} style={{borderWidth: 0.5, width: 200}}
                ref= {(el) => { confirmPassword = el; }}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                value={this.state.confirmPassword}
                />

                <TouchableOpacity
                style={styles.deactivateButton}
                onPress={this.checkNewPasswords}

                >
                <Text>Save Password</Text>
                </TouchableOpacity>

                </Collapsible>

                <TouchableOpacity
                style={styles.button}
                onPress={this.openDeactivate}

                >
                <Text>Delete Account</Text>
                </TouchableOpacity>

                <Collapsible collapsed={!this.state.deactivateCol}>

                <Text>Enter Reason for Deactivation: </Text>

                <TextInput
                style={{borderWidth: 0.5, height: 70, width: 200}} multiline={true}

                />

                <TouchableOpacity
                style={styles.deactivateButton}
                onPress={this.onDeleteAccount}

                >
                <Text>Confirm Deactivation</Text>
                </TouchableOpacity>

                </Collapsible>

                <TouchableOpacity
                style={styles.button}
                onPress={this.onLogOutPress}

                >



<Text>Log out</Text>
<TouchableOpacity onPress={this.onLogOutPress} />



 </TouchableOpacity>


       </View>
</ScrollView>



);

    }
}

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
                                 welcome: {
                                 fontSize: 20,
                                 fontWeight: 'bold',
                                 textAlign: 'center',
                                 //marginBottom: 5,
                                 marginTop: 25,
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
                                 marginTop: 15,
                                 marginBottom: 25,
                                 fontStyle: 'italic',
                                 textAlign: 'center',
                                 color: '#333333',
                                 },
                                 button: {
                                   marginTop:10,
         height:45,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom:20,
         width:250,
         borderRadius:30,
         backgroundColor: "#00BFFF",
       },


                                 deactivateButton: {
                                   marginTop:10,
         height:25,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom:10,
         width:150,
         borderRadius:10,
         backgroundColor: "#00BFFF",
       },
                                 });
