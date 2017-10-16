import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm1 from './LoginForm1';

export default class Login extends Component{
    render() {
        return(
             < Image source = {require('./LogIn.jpg')} style ={styles.BgImage}>
             <KeyboardAvoidingView behavior="padding" style={styles.container}>
                 
                   <View style={styles.logoContainer} >
                       <Image
                       style={styles.logo} 
                       source={require('./logo.png')}
                       />
                       <Text style={styles.title}>iSurvive</Text>
                       <View style={styles.formContainer}>
                    <LoginForm1 />
                   </View>
                   </View>
                   
                 
                </KeyboardAvoidingView>
                  </Image>
                
             );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginRight: 450,
        marginBottom:600
    },
    logo: {
        width: 200,
        height: 200
        
    },
    title:{
        color: '#FFFFFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 40,
        fontFamily: 'normal',

        
    },
    formContainer:{
        marginTop: 50,
        marginRight: 40,
        marginLeft: 30
    }
    
    
});
