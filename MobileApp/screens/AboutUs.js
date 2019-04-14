import React from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image} from 'react-native';


const prat = Platform.select({
                             ios: 'Prathyusha Pillari\n' + 'Director of App Development',
                             android:
                             'Double tap R on your keyboard to reload,\n' +
                             'Shake or press menu button for dev menu',
                             });

const shreya = Platform.select({
                               ios: 'Shreya Nallapati\n' + 'Founder/ Executive Director',
                               android:
                               'Double tap R on your keyboard to reload,\n' +
                               'Shake or press menu button for dev menu',
                               });


const ananya = Platform.select({
                               ios: 'Ananya Cleetus\n' + 'Director of Mental Health',
                               android:
                               'Double tap R on your keyboard to reload,\n' +
                               'Shake or press menu button for dev menu',
                               });

const allison = Platform.select({
                                ios: 'Allison Liu\n' + 'Director of Web Development',
                                android:
                                'Double tap R on your keyboard to reload,\n' +
                                'Shake or press menu button for dev menu',
                                });

const gianna = Platform.select({
                               ios: 'Gianna Williams\n' + 'Director of Social Advocacy',
                               android:
                               'Double tap R on your keyboard to reload,\n' +
                               'Shake or press menu button for dev menu',
                               });

const nicole = Platform.select({
                               ios: 'Nicole Meister\n' + 'Director of Data Analytics',
                               android:
                               'Double tap R on your keyboard to reload,\n' +
                               'Shake or press menu button for dev menu',
                               });




type Props = {};
export default class AboutUs extends React.Component{
    render() {
        return (
                <ScrollView>
                <View style={styles.container}>
                <Text style={styles.welcome}>Never Again Tech Executive Team</Text>
                <Text style={styles.about}>#NeverAgainTech is a project that uses technology to predict and prevent mass shootings. We wanted to take what we knew best, technology and Artificial Intelligence, and work together with teens all across the nation to advocate for what we believe.</Text>
                
                <Image source={{uri : 'shreya'}} style={styles.image} />
                <Text style={styles.instructions}>{shreya}</Text>
                
                <Image source={{uri : 'gianna'}} style={styles.image} />
                <Text style={styles.instructions}>{gianna}</Text>
                
                <Image source={{uri : 'nicole'}} style={styles.image} />
                <Text style={styles.instructions}>{nicole}</Text>
                
                <Image source={{uri : 'ananya'}} style={styles.image} />
                <Text style={styles.instructions}>{ananya}</Text>
                
                <Image source={{uri : 'prat'}} style={styles.image} />
                <Text style={styles.instructions}>{prat}</Text>
                
                <Image source={{uri : 'allison'}} style={styles.image} />
                <Text style={styles.instructions}>{allison}</Text>
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
                                 marginTop: 50,
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
