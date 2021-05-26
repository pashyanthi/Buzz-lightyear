import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import{createBottomTabNavigator}from 'react-navigation-tabs';


import InstagramScreen from './screens/inst'
import FacebookScreen from './screens/fb';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <AppContainer/>
      
       </View>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Instagram: {screen:InstagramScreen},
  Facebook: {screen:FacebookScreen}
})
const AppContainer=createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rosybrown',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
});