/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Dimensions, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ENTRIES, images} from './SkillsEntries';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}


const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;




export default class SkillsCarousel extends Component {

  constructor (props) {
        super(props);
        this.state = {
          mindfulnessModal: false,
          deepbreathingModal: false,
          pmrModal: false,
          selfsoothingModal: false,
          exerciseModal: false,
          socialsupportModal: false
        };
    }




  handlePress(text) {
    switch(text) {

    case 'mindfulness':
    this.setState({mindfulnessModal: true});
      break;

    case 'deepbreathing':
    this.setState({deepbreathingModal: true});
      break;

    case 'pmr':
    this.setState({pmrModal: true});
      break;

    case 'selfsoothing':
    this.setState({selfsoothingModal: true});
      break;

      case 'exercise':
      this.setState({exerciseModal: true});
        break;

        case 'socialsupport':
        this.setState({socialsupportModal: true});
          break;

    default:
      Alert.alert("MODAL NOT FOUND");

    }
}



    _renderItem ({item, index}) {

      const currFunct = "" + item.function
      const currImg = images[item.illustration]

        return (
            <View style={styles.slider}>
            <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            <TouchableHighlight onPress={this.handlePress.bind(this, currFunct)}>
                <Image style={styles.image} source={currImg}/>
                </TouchableHighlight>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.bottomHalf}>
                <Text style={styles.gap}>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                </View>



            </View>
        );
    }

    render () {
        return (
<View style={styles.view}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout={'stack'}
              layoutCardOffset={18}
              loop={true}
              removeClippedSubviews={false}
            />

            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.mindfulnessModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({mindfulnessModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Mindfulness</Text>


            </View>
            </View>
            </Modal>


            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.deepbreathingModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({deepbreathingModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Deep Breathing</Text>

            </View>
            </View>
            </Modal>


            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.pmrModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({pmrModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Progressive Muscle Relaxation</Text>

            </View>
            </View>
            </Modal>


            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.selfsoothingModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({selfsoothingModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Self-Soothing</Text>

            </View>
            </View>
            </Modal>


            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.exerciseModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({exerciseModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Exercise</Text>

            </View>
            </View>
            </Modal>


            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.socialsupportModal}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
            <View>

            <TouchableOpacity
            onPress={() => {
              this.setState({socialsupportModal: false});;
            }}>
            <Text>Close</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Social Support</Text>

            </View>
            </View>
            </Modal>


            </View>
        );
    }
};

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

var styles = StyleSheet.create({

  gap:{
    backgroundColor: 'white'

  },
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    image:{
                               width: 300,
                               height: 300,
                               borderRadius: 300/2,

    },
    title: {
                               marginTop: 25,
                               margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    paragraph: {
                                       fontSize: 20,
                                       fontWeight: 'bold',
                                       textAlign: 'center',
                                       backgroundColor: 'white',

    },

    desc: {
                               marginHorizontal: 15,
                               fontStyle: 'italic',
                               textAlign: 'center',
                               color: '#333333',
                               fontSize: 15,
                               marginBottom: 200,
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    slider: {
        marginTop: 15,
        overflow: 'visible', // for custom animations
                               backgroundColor: 'white',
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    view:{
      alignItems: 'center',
      justifyContent: 'center',
                               backgroundColor: 'white',
    },
});
