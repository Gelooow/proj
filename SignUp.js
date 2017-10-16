import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';

export default class SignUp extends Component{
    render() {
        return(
            < Image source = {require('./SignUp.png')} style ={styles.BgImage}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                   <View style={styles.logoContainer} >
                      <Image
                       style={styles.logo} 
                       source={require('./logo2.png')}
                       />
                   <View style={styles.formContainer}>
                       
                    <SignUpForm />
                   </View>
                   </View>
                   



                </KeyboardAvoidingView>
                    </Image>

             );
    }
}

const styles = StyleSheet.create({
    container: {
   flex: 1

  },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginRight: 440,
        marginTop:200
    },
    logo: {
        width: 200,
        height: 100
        
    },
       
   formContainer:{
        marginTop: 50,
        marginRight: 50,
        marginLeft: 30
    }
});
