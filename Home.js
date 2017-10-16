import React, { Component } from 'react';
import {  AppRegistry, StyleSheet, Text, View, Header, Icon } from 'react-native';
//import { Header, Icon} from 'react-native-elements';


export default class Home extends React.Component {
  render() {
      
    return (

        <View> 
         
           
          <Text style = {styles.head}> try </Text>


        </View>
         );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white',
   
  },
  head:{
    backgroundColor: 'green',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});