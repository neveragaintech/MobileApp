/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ENTRIES} from './SkillsEntries';

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

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
            <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                <Image style={styles.image} source={{uri: item.illustration}}/>
                <Text style={styles.title}>{item.title}</Text>

            </View>
        );
    }

    render () {
        return (
<View style={styles.view}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout={'stack'}
              layoutCardOffset={18}
              loop={true}
              removeClippedSubviews={false}
            />

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
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
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

    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
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

    },
});
