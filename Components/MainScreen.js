import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return <AppContainer />;
  }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
  
  HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab },

},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
	  activeTintColor:'#000',
	  inactiveTintColor:'#d1cece',
          showLabel: false,
	  showicon: true,
  }
}
);

const AppContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
