import React from 'react';
// npm install react-native-divider --save
import Divider from 'react-native-divider';
import PhotoUpload from 'react-native-photo-upload'
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
//import { Button } from 'react-native-elements';
import {Platform, StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, Switch, TextInput} from 'react-native';

type Props = {};
export default class ProfilePage extends React.Component{

  state = {
    switchValue: false,
    notificationCol: false,
    acctsettingsCol: false,
    passwordCol: false,
    deactivateCol: false,
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
    render() {
        return (
                <ScrollView>

                <PhotoUpload
                onPhotoSelect={avatar => {
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

                <Text style={styles.welcome}>username</Text>
                <Text style={styles.about}>this is the profiles bio but does this work?</Text>
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

                <Switch
         style={{ marginTop: 30 }}
         onValueChange={this.toggleSwitch}
         value={this.state.switchValue}
       />

       </Collapsible>


                <TouchableOpacity
                style={styles.button}
                onPress={this.openAcctSettings}

                >
                <Text>Account Settings</Text>
                </TouchableOpacity>

                <Collapsible collapsed={!this.state.acctsettingsCol}>

                <Text>Enter New Username</Text>

                <TextInput secureTextEntry={true} style={{borderWidth: 0.5, height: 35}} multiline={false}/>

                <TouchableOpacity
                style={styles.deactivateButton}

                >
                <Text>Save Username</Text>
                </TouchableOpacity>

                <Text>Enter New Bio: </Text>

                <TextInput secureTextEntry={true} style={{borderWidth: 0.5, height: 70}} multiline={true}/>

                <TouchableOpacity
                style={styles.deactivateButton}

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
                <Text>Old Password: </Text>

                <TextInput secureTextEntry={true} style={{borderWidth: 0.5}}/>

                <Text>New Password: </Text>

                <TextInput secureTextEntry={true} style={{borderWidth: 0.5}}/>

                <Text>New Password Again: </Text>


                <TextInput secureTextEntry={true} style={{borderWidth: 0.5}}/>

                <TouchableOpacity
                style={styles.deactivateButton}

                >
                <Text>Save Password</Text>
                </TouchableOpacity>

                </Collapsible>

                <TouchableOpacity
                style={styles.button}
                onPress={this.openDeactivate}

                >
                <Text>Deactivate Account</Text>
                </TouchableOpacity>

                <Collapsible collapsed={!this.state.deactivateCol}>

                <Text>Enter Reason for Deactivation: </Text>

                <TextInput secureTextEntry={true} style={{borderWidth: 0.5, height: 70}} multiline={true}/>

                <TouchableOpacity
                style={styles.deactivateButton}

                >
                <Text>Confirm Deactivation</Text>
                </TouchableOpacity>

                </Collapsible>

                <TouchableOpacity
                style={styles.button}
                //onPress={onPressLearnMore}

                >
                <Text>Log Out</Text>
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
