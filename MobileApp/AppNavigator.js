import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './screens/HomeScreen';
import ForumPage from './screens/ForumPage';
import JournalPage from './screens/JournalPage';
import ProfilePage from './screens/ProfilePage';
import SkillsPage from './screens/SkillsPage';



// const tabBarIcon = name => ({focused, horizontal, tintColor }) => (
//   <MaterialIcons name={name} color={focused ? tintColor: tintColor} size={horizontal ? 17 : 24} />
// );

const TabNavigator = createMaterialBottomTabNavigator({
 ForumPage: {
   screen: ForumPage,
   navigationOptions: { title: 'Forum',
   tabBarColor: '#000000',
   tabBarIcon: <MatIcon size={24} color="white" name="forum" />,
  },
   },
 JournalPage: {
   screen: JournalPage,
   navigationOptions: { title: 'Journal',
   tabBarColor: '#000000',
   tabBarIcon: <MatIcon size={24} color="white" name="book" />,
},
 },
 SkillsPage: {
   screen: SkillsPage,
   navigationOptions: { title: 'Coping Skills',
   tabBarColor: '#000000',
   tabBarIcon: <MatIcon size={24} color="white" name="settings" />,
},
 },

 ProfilePage: {
   screen: ProfilePage,
   navigationOptions: { title: 'My Profile',
   tabBarColor: '#000000',
   tabBarIcon: <MatIcon size={24} color="white" name="person" />,
},
 },
},
 {
   initialRouteName: 'ForumPage',
   shifting: true,
},
);

const FeedStack = createStackNavigator({
  HomeScreen: HomeScreen,

});

// TabNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = navigation.state.routes[navigation.state.index].params.showTabBar;
//
//     return {
//       tabBarVisible,
//     };
// };


 const SwitchNavigator = createSwitchNavigator({ Opening: FeedStack, Tabs: TabNavigator,}, { initialRouteName: 'Opening', resetOnBlur: true, }, );

 export default createAppContainer(SwitchNavigator);
