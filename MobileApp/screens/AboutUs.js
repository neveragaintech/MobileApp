import React from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image} from 'react-native';


const prat = Platform.select({
                             ios: 'Prathyusha Pillari\n' + 'Director of App Development',
                             android:
                             'Prathyusha Pillari\n' + 'Director of App Development',
                             });

const shreya = Platform.select({
                               ios: 'Shreya Nallapati\n' + 'Founder/ Executive Director',
                               android:
                               'Shreya Nallapati\n' + 'Founder/ Executive Director',
                               });


const ananya = Platform.select({
                               ios: 'Ananya Cleetus\n' + 'Director of Mental Health',
                               android:
                               'Ananya Cleetus\n' + 'Director of Mental Health',
                               });

const allison = Platform.select({
                                ios: 'Allison Liu\n' + 'Director of Web Development',
                                android:
                                'Allison Liu\n' + 'Director of Web Development',
                                });

const gianna = Platform.select({
                               ios: 'Gianna Williams\n' + 'Director of Social Advocacy',
                               android:
                               'Gianna Williams\n' + 'Director of Social Advocacy',
                               });

const nicole = Platform.select({
                               ios: 'Nicole Meister\n' + 'Director of Data Analytics',
                               android:
                               'Nicole Meister\n' + 'Director of Data Analytics',
                               });

const kundana = Platform.select({
                               ios: 'Kundana Pillari\n' + 'Software Engineer                 ',
                               android:
                               'Kundana Pillari\n' + 'Software Engineer',
                               });

const aboutTheApp = Platform.select({
                                ios: 'This app, built by Neveragaintech, aims to help survivors and victims of gun violence treat the emotional trauma/PTSD effects of these horrific incidents. This app aims to create acceptance and reduce the stigma of PTSD with its forum and journal pages, where survivors can share their experiences and feelings with regards to hyper vigilance, survivors guilt, and fear among other things. The skills page focuses on coping strategies for survivors such as grounding and art therapy, and provides them in an accessible mobile format for immediate response in situations where certain memories are triggered.\n' + '\nWe are developing a page where survivors are connected to the closest trauma recovery psychologists in their area. Our mission is to dispel the stigma around PTSD/mental health effects of gun violence by providing building support communities and having resources at fingertips.',
                                android:
                                'This app, built by Neveragaintech, aims to help survivors and victims of gun violence treat the emotional trauma/PTSD effects of these horrific incidents. This app aims to create acceptance and reduce the stigma of PTSD with its forum and journal pages, where survivors can share their experiences and feelings with regards to hyper vigilance, survivors guilt, and fear among other things. The skills page focuses on coping strategies for survivors such as grounding and art therapy, and provides them in an accessible mobile format for immediate response in situations where certain memories are triggered.\n' + 'We are developing a page where survivors are connected to the closest trauma recovery psychologists in their area. Our mission is to dispel the stigma around PTSD/mental health effects of gun violence by providing building support communities and having resources at fingertips.',
                                });

const team = Platform.select({
                                    ios: '     Never Again Tech Team     ',
                                    android:
                                    '             Team             ',
                                    });


export default class AboutUs extends React.Component{
    render() {
        return (
                <ScrollView>
                <View style={styles.container}>
                
                <Text style={styles.welcome}>Never Again Tech</Text>
                <Text style={styles.about}>{aboutTheApp}</Text>
                
                <Text style={styles.welcome}>{team}</Text>
                {/* <Text style={styles.about}>#NeverAgainTech is a project that uses technology to predict and prevent mass shootings. We wanted to take what we knew best, technology and Artificial Intelligence, and work together with teens all across the nation to advocate for what we believe.</Text> */}
                
                 <Image source={images.shreya} style={styles.image} />
                <Text style={styles.instructions}>{shreya}</Text>

                <Image source={images.prat} style={styles.image} />
                <Text style={styles.instructions}>{prat}</Text>
                
                <Image source={images.kundana} style={styles.image} />
                <Text style={styles.instructions}>{kundana}</Text>
                
                <Image source={images.ananya} style={styles.image} />
                <Text style={styles.instructions}>{ananya}</Text>
                
                <Image source={images.gianna} style={styles.image} />
                <Text style={styles.instructions}>{gianna}</Text>
                
                <Image source={images.nicole} style={styles.image} />
                <Text style={styles.instructions}>{nicole}</Text>

                <Image source={images.allison} style={styles.image} />
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
                                 margin: 10,
                                 fontStyle: 'italic',
                                 textAlign: 'center',
                                 color: '#333333',
                                 },
                                 });

export const images = {
    'prat'  : require('../assets/prat.jpg'),
    'nicole'    : require('../assets/nicole.jpg'),
    'shreya'    : require('../assets/shreya.jpg'),
    'ananya'    : require('../assets/ananya.jpg'),
    'gianna'    : require('../assets/gianna.jpg'),
    'allison'    : require('../assets/allison.jpg'),
    'kundana'    : require('../assets/kundana.jpg')
}

