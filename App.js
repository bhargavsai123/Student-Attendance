import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Pages/HomeScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var SwitchNavigation = createSwitchNavigator({
  HomeScreen: HomeScreen,
});
const AppContainer = createAppContainer(SwitchNavigation);
