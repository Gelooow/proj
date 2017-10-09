import React, { Component } from 'react';
import { ToastAndroid, StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class SignUpForm extends Component{
    render() {
        return(
                <View stylez={styles.container}>
                    <StatusBar 
                    barStyle="light-content"
                    />
                    <TextInput
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                     onSubmitEditing={() => this.addressInput.focus()}
                    />
                    <TextInput
                    placeholder="address"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    ref={(input) => this.addressInput = input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>

                     <Text 
                     
                     style={styles.Signup} >
                        Already have an Account? Click here.
                    </Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10,
       // marginTop:50
    },
    Signup:{
        height: 40,
        marginBottom: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 10

    },
    buttonContainer:{
        backgroundColor: 'yellowgreen',
        paddingVertical: 15,
        
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',


    }
    
});