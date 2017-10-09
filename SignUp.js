import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';

export default class SignUp extends Component{
    render() {
        return(
             <KeyboardAvoidingView behavior="padding" style={styles.container}>
                   <View style={styles.logoContainer} >
                       <Image
                       style={styles.logo} 
                       source={require('./logo.png')}
                       />
                       <Text style={styles.title}>iSurvive</Text>
                   </View>
                   <View style={styles.formContainer}>
                    <SignUpForm />
                   </View>
                </KeyboardAvoidingView>
             );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27ae60'


    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
        
    },
    title:{
        color: '#FFFFFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 40,
        fontFamily: 'serif'
    }
});
