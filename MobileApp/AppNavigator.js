import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './screens/HomeScreen';
import ForumPage from './screens/ForumPage';
import JournalPage from './screens/JournalPage';
import ProfilePage from './screens/ProfilePage';
import SkillsPage from './screens/SkillsPage';
import AboutUs from './screens/AboutUs';



// const tabBarIcon = name => ({focused, horizontal, tintColor }) => (
//   <MaterialIcons name={name} color={focused ? tintColor: tintColor} size={horizontal ? 17 : 24} />
// );

const TabNavigator = createMaterialBottomTabNavigator({
 ForumPage: {
   screen: ForumPage,
   navigationOptions: { title: 'Forum',
   tabBarColor: '#db930d',
   tabBarIcon: <MatIcon size={24} color="white" name="form" />,
  },
   },
 JournalPage: {
   screen: JournalPage,
   navigationOptions: { title: 'Journal',
   tabBarColor: '#db930d',
   tabBarIcon: <MatIcon size={24} color="white" name="book" />,
},
 },
 SkillsPage: {
   screen: SkillsPage,
   navigationOptions: { title: 'Skills',
   tabBarColor: '#db930d',
   tabBarIcon: <MatIcon size={24} color="white" name="Trophy" />,
},
 },
AboutUs: {
  screen: AboutUs,
  navigationOptions: { title: 'About',
  tabBarColor: '#db930d',
  tabBarIcon: <MatIcon size={24} color="white" name="team" />,
},
                                                      },

 ProfilePage: {
   screen: ProfilePage,
   navigationOptions: { title: 'Profile',
   tabBarColor: '#db930d',
   tabBarIcon: <MatIcon size={24} color="white" name="tool" />,
},

},
//                                                      {
//   initialRouteName: 'ForumPage',
//   shifting: true,
//},
                                                      });

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
