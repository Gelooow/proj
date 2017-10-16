import React from 'react';
import {  AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
//import Login from './Login'
//import SignUp from './SignUp'
//import Home from './Home'


var Login = require('./Login');
var Home = require('./Home');

export default class App extends React.Component {
  render() {
    return (    

      <Navigator 
          initialRoute = {{
            id: 'Login' 
          }}
          renderScene ={
            this.navigatorRenderScene
          }
      />

    //<Login/>
    //<SignUp/>
   // <Home/>
    );
  }
  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch (route.id){
      case 'Login':
          return(<Login navigator={navigator} title="Login" />);
      case 'Home':
          return(<Home navigator={navigator} title="Home" />);


    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#27ae60',
    //alignItems: 'center',
   // justifyContent: 'center',
 //  width: 'null',
  // height: 'null',
  },
});

AppRegistry.registerComponent('App', () => App);