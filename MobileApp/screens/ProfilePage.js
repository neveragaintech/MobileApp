import React from 'react';
// npm install react-native-divider --save
import Divider from 'react-native-divider';
import PhotoUpload from 'react-native-photo-upload'
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
//import { Button } from 'react-native-elements';
import {Platform, StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';

type Props = {};
export default class ProfilePage extends React.Component{
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
                //onPress={onPressLearnMore}

                >
                <Text>Account Settings</Text>
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
                                 }
                                 });
