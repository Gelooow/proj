import React from 'react';
import {  AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './Login'
import SignUp from './SignUp'

export default class App extends React.Component {
  render() {
    return (
     // <View style={styles.container}>
      //<Text>iSurvive!!! yeah boy!!</Text>
       
     // </View>
     <Login/>
     //<SignUp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);